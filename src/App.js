import react, { useState, useRef, useEffect } from 'react'
import Todolist from './todolist'
import './App.css'
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'listKey'


function App() {
  const [todos, setToods] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storedTodo) setToods(storedTodo)
  },[]
  )

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.compleate = !todos.compleate
    setToods(newTodos)

  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setToods((preveTodos) => {
      return [...preveTodos, { id: uuidv4(), name: name, compleate: false }]
    })
    todoNameRef.current.value = null
  }
  return (
    <>
      <Todolist todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type='text' />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>clear to do</button>
    </>
  )
}

export default App
