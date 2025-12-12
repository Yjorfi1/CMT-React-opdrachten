import './App.css'
import { useState, useEffect } from 'react';
import Weatherinfo from './components/Weatherinfo';

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Zurich');
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  const apiKey = "6e7ae5a702c2f21af10f173a73ad9195";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setError(false);

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
          setError(true);
          return;
        }

        const weatherData = await response.json();
        setWeather(weatherData);

      } catch (error) {
        setError(true);
      }
    };

    fetchWeather();
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(search);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Zoek een stad op"
        />
        <button type="submit">Search</button>
      </form>

      {error && <h2>Geen stad gevonden 👹👹</h2>}

      {weather && !error && (
        <Weatherinfo
          city={weather.name}
          temp={weather.main?.temp}
          feels_like={weather.main?.feels_like}
          speed={weather.wind?.speed}
          humidity={weather.main?.humidity}
        />
      )}
    </div>
  );
}

export default App;
