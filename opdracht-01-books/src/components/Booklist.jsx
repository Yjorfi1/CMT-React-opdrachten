import Book from './Book';
const Booklist = () => {
    return ( 

      <section >
      <h1>Books overzicht</h1>
      <div className='book-container'>
      <div>
      <Book title="Harry Potter" author="Elisabetta Dami" image='./images/book-1.png'/>
      </div>
      <div>
      <Book title="Fantasia" author="J.K Rowling" image='/images/book-2.png'/>
      </div>
      <div>
      <Book title="Hunger Games" author="Suzanne Collins" image='/images/book-3.png'/>
      </div>
      </div>

    </section>

     );
}
 
export default Booklist;
