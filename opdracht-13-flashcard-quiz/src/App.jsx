import './App.css'
import data from './data.js';
import FlashCardList from './components/FlashCardList.jsx';

function App(){
  return (
    <>
      <h1>Flashcards</h1>
      <FlashCardList data={data} />
    </>
  )
}

export default App
