
import { useState } from "react";
// import BookCounter from './BookCounter.jsx';


function  Book({ title, author, category, image }) {
  const [aantalKeerGelezen , setAantalKeerGelezen] = useState(0);

  const verhoogTeller = () => {
    setAantalKeerGelezen(aantalKeerGelezen  + 1);
  };

  return (
    <section className="vc">
     <img id="image" src={image} alt={title} />
            <h2>{title}</h2>
            <p>{author}</p>
            <p>{category}</p>
      <button onClick={verhoogTeller}>
        Keer gelezen: {aantalKeerGelezen }
      </button>
    </section>
  );
}

export default Book;

