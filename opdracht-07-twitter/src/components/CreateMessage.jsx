import { useState } from "react";

const CreateMessage = ({ textInput, setMessage, setTextInput, message }) => {



    const UserInputHandler = (e) => {
       
        setTextInput(e.target.value);
    }
    const submitMessageHandler = (e) => {
        e.preventDefault();

        setMessage([...message, textInput])
        setTextInput('')
    }
    return (
        <form onSubmit={submitMessageHandler}>
            <textarea value={textInput} cols="50" rows="5" onChange={UserInputHandler}></textarea>
            <button onClick={submitMessageHandler}>Toevoegen</button>
        </form>

    );
}

export default CreateMessage;