
// import { useState } from "react";


// function  Menu({ Name, Price, Description, image }) {
//   const [aantalKeerGelezen , setAantalKeerGelezen] = useState(0);


//   return (
//     <section>
//      <img id="image" src={image} alt={title} />
//             <h2>{Name}</h2>
//             <p>{Price}</p>
//                         <h3>{Description}</h3>
//     </section>
//   );
// }

// export default Menu;

const  Menu = ({id, title, category, price, img, desc}) => {
    return (
        <section>
            <img src={img} alt="foto" />
            <h2>{title}</h2>
            <h4>{category}</h4>
            <h3>{price}</h3>
            <p>{desc}</p>
        </section>

      );
}
 
export default Menu;

