import './App.css'
import { useState } from 'react'
import CreateTodo from './components/CreateTodo'
import TodoList from './components/TodoList'

function App() {
const [textInput, setTextInput] = useState('')
const [message, setMessage] = useState([])

console.log(message)

let name="persoon"
  return (
    <>
      <h1>Opdracht 8 - Todo</h1>
      <CreateTodo textInput={textInput} setMessage={setMessage} setTextInput={setTextInput} message={message}/>
      <TodoList message={message}/>

    </>
  )
}

export default App
