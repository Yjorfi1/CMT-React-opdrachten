
import { useState } from 'react';
import animals from '../animals.js';

const Animalsearch = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const searchHandler = (e) => {
    const newSearch = e.target.value;
    setSearchInput(newSearch);
    const filteredAnimals = animals.filter((animal) =>
      animal.name.toLowerCase().includes(newSearch.toLowerCase())
    );
    onSearch(filteredAnimals);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="zoek hier uw dier"
        name="search"
        onChange={searchHandler}
        value={searchInput}
      />
    </div>
  );
};

export default Animalsearch;