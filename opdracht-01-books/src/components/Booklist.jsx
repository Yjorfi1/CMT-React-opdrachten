import { useState } from "react";
// import BookCounter from './BookCounter.jsx';
import Book from './Book.jsx';


const Booklist = () => {
  const [books, setbooks] = useState([{
      title: 'Harry Potter',
      author: ' J.K Rowling',
      image: './public/images/book-1.png'
    },
    {
      title: 'Fantasia',
      author: ' Elisabetta Dami',
      image: './public/images/book-2.png'
    },
    {
      title: 'Hunger Games',
      author: ' Suzanne Collins',
      image: './public/images/book-3.png'
    },
  ]) 

    return ( 

      <section >
        
      <h1>Books overzicht</h1>
       <div className="book-container">
       {/* <BookCounter aantal={books.length} />  */}
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

     );
}
 
export default Booklist;
