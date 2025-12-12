import Flashcard from './flashcard.jsx';

const FlashCardList = ({ data }) => {
  return (
    <section className="flashcard-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center p-6">
      {data.map((card, index) => (
        <Flashcard key={index} card={card} />
      ))}
    </section>
  );
}

export default FlashCardList;