
const AnimalCard = ({ animal, onShowDetail }) => {
  return (
    
    <section>
      
      <div className="container">
           <img src={animal.imageUrl}/>
      <h2>{animal.name}</h2>
      <p>{animal.description}</p>

      <button onClick={() => onShowDetail}>details</button>
      </div>
    </section>
  );
};

export default AnimalCard;