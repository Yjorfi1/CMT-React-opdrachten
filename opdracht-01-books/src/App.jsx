import './App.css'
import Book from './components/Book'

function App() {

  return (
    <section className="book-container">
      <h1>Movie overzicht</h1>
      <Movie title="Harry Potter" author="Elisabetta Dami" image='./images/book-1.png'/>
      <Movie title="Fantasia" author="J.K Rowling" image='/images/book-2.png'/>
      <Movie title="Hunger Games" author="Suzanne Collins" image='/images/book-3.png'/>

    </section>
  )
}

export default App
