import { useState } from "react";
// import BookCounter from './BookCounter.jsx';
import Book from './Book.jsx';
import booksData from '../data.js'


const Booklist = () => {
  const [ books, setBooks ] = useState(booksData)
  const [searchInput, setSearchInput] = useState('')

  const searchHandler = (e) => {
    let newSearch = e.target.value;
    setSearchInput(newSearch);
    const filteredBooks = booksData.filter((book) =>

      book.title.toLowerCase().includes(newSearch.toLowerCase())
    )
    setBooks(filteredBooks)
  }
  const handleChange = (e) =>{
    e.preventdDefault();
    setSearchInput(e.target.value);
  }



  return (

    <section >

      <h1>Books overzicht</h1>
      <div className="book-container">
        <div className="search">  
           <input type="text" 
           placeholder="zoek hier uw boek" 
           name='search'
           onChange={searchHandler} 
           value={searchInput}/>
           </div>
           <div>
            <select id='category' value={selectedCategory} onChange={filteredHandler} id=""></select>
           </div>

categories.map((category, index) => (
  <category />
))
        {books.map((book, index) => (
          <Book className="booking"
            key={index}
            title={book.title}
            author={book.author}
            image={book.image}
          />
        ))}
      </div>

    </section>

  )
};


export default Booklist;
