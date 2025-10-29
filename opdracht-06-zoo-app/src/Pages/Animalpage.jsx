// src/Pages/ProductDetail.jsx
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import animals from '../animals.js';

const AnimalDetail = () => {
  const { animalId } = useParams();
  const navigate = useNavigate();
  const [animalList, setAnimalList] = useState(animals);
  
  // Zoek het juiste product
  const animal = animalList.find(animal => p.id === Number(animalId));

  if (!animal) {
    return <div>no dier</div>;
  }


  return (
    <section className='container'>
      <button onClick={() => navigate('/')}>
        ← Terug naar home
      </button>
      
      <h1>{animal.name}</h1>
      <p>Beschrijving: {animal.description}</p>
    </section>
  );
};

export default AnimalDetail;