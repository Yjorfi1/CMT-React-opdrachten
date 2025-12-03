import './App.css'
import { useState } from 'react'
import CreateMessage from './components/CreateMessage'
import MessageList from './components/MessageList'

function App() {
const [textInput, setTextInput] = useState('')
const [message, setMessage] = useState([])

console.log(message)

let name="persoon"
  return (
    <>
      <h1>Opdracht 7 - Twitter</h1>
      <CreateMessage textInput={textInput} setMessage={setMessage} setTextInput={setTextInput} message={message}/>
      <MessageList name={name} message={message}/>

    </>
  )
}

export default App
