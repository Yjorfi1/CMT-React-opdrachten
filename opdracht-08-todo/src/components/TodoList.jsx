import TodoItem from "./TodoItem";


const Todolist = ({ message }) => {
  return (
    <>
      {message.map((tdo, index) => (
      <TodoItem 
      key={index}
      message={tdo} 
      />
    ))}
    </>

  );
};

export default Todolist;