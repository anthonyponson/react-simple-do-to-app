import React from 'react'
import Todo from './todo'

function Todolist({ todos, toggleTodo }) {
  return( todos.map((todo) => {
    return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
  })
  )
}

export default Todolist
 