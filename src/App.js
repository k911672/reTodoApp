import './App.css';
import React,{useState} from 'react'
import Form from './component/Form'
import List from './component/List'

const App = () => {
  const [todos, setTodos] = useState([
    {
      content : '課題をする'
    },
    {
      content : '洗濯をする'
    },
    {
      content : '電話をする'
    }
  ])


  return (
    <>
      <h1>Todo App</h1>
      <Form todos= {todos} setTodos={setTodos}/>
      <List todos = {todos}/>
    </>
  )
}

export default App