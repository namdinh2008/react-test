import { useState } from 'react'
import CardProduct from './components/CardProduct'
import Form from './components/Form'
import Todo from './components/Todo'
import AuthSystem from './components/AuthSystem'
import './App.css'

function App() {

  return (
    <>
      <CardProduct />
      <Form />
      <Todo />
      <AuthSystem />
    </>
  )
}

export default App
