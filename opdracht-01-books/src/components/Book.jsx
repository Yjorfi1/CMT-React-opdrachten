
import { useState } from "react";
// import BookCounter from './BookCounter.jsx';


function Book({ title, author, category, image, desc, releaseyear, pages }) {
  const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0);
    const [liked, setLiked] = useState(false);
  const [Flipped, setFlipped] = useState(true);

  const toggleLike = (e) =>{
    e.stopPropagation()
    setLiked(!liked)};
  

  const verhoogTeller = () => {
    setAantalKeerGelezen(aantalKeerGelezen + 1);
  };

  const flippHandler = () => { 
    setFlipped(!Flipped)
   }

return (
  <div className="books">
    <section onClick={flippHandler} className="book-container">
      {Flipped ?
        <div className="book-front">
          <img id="image" src={image} alt={title} />
          <h2>{title}</h2>
          <p>{author}</p>
          <p>{category}</p>
          <button onClick={toggleLike}>{liked ? "❤️" : "👹"}</button>
                 {liked && (<p className="favorite-text">Toegevoegd</p>)} 

        </div>
        :
        <div className="book-back">
          <img id="image" src={image} alt={title} />
          <p>Beschrijving: {desc}</p>
          <h3>Jaar: {releaseyear}</h3>
          <h3>Pagina's: {pages}</h3>
          
        </div>
      }
    </section> 
    </div>
)

}


export default Book;
