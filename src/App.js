import './App.css';
import React from 'react'
import Form from './component/Form'
import List from './component/List'

const App = () => {
    return (
      <>
        <h1>Todo App</h1>
        <Form />
        <List />
      </>
    )
}

export default App