import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AnimalDetail from './Pages/Animalpage';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animal/:animalId" element={<AnimalDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;