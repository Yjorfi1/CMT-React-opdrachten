
import { useState } from "react";
// import BookCounter from './BookCounter.jsx';


function Book({ title, author, category, image, desc, releaseyear, pages }) {
  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);
  const [flipped, setFlipped] = useState(true);

  const verhoogTeller = () => {
    setAantalKeerGelezen(aantalKeerGelezen + 1);
  };

  const flippHandler = () => { 
    setFlipped(!flipped)
   }


return (
  <div className="books">
    <section onClick={flippHandler} className="book-container">
      {flipped ?
        <div className="book-front">
          <img id="image" src={image} alt={title} />
          <h2>{title}</h2>
          <p>{author}</p>
          <p>{category}</p>
        </div>
        :
        <div className="book-back">
                    <img id="image" src={image} alt={title} />
          <p>{desc}</p>
          <h3>{releaseyear}</h3>
          <h3>{pages}</h3>
          
        </div>
      }
    </section> 
    </div>
)
}


export default Book;
