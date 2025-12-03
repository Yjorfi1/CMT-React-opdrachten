import Message from "./Message";


const Messagelist = ({ name, message }) => {
  return (
    <>
      {message.map((msg, index) => (
      <Message 
                key={index}
      name={name} 
      message={msg} 
      />
    ))}
    </>

  );
};

export default Messagelist;