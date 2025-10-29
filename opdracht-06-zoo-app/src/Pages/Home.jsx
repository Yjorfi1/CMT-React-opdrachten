import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import  animals  from '../animals.js';
import AnimalCard from '../components/Card';

const Home = () => {
  const navigate = useNavigate();
  const [animalList, setAnimalList] = useState(animals);

  const goToDetail = (animalId) => {
    navigate(`/card/${animalId}`);
  };

return (
    <section>
     
      <div>
               <h1>Welkom bij onze winkel van dieren!</h1>

      {animalList.map(animal => (
        <AnimalCard
          key={animal.id}
          animal={animal}
          onShowDetail={goToDetail}
        />
      ))}
      </div>
    </section>
  );}
  export default Home;
