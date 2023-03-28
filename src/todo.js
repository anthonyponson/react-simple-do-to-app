import React from 'react'

function Todo({ todo, toggleTodo }) {

  function handleTodoClick(){
    toggleTodo(todo.id)
  }
 
  return (
    <div>
      <label>
        <input type='checkbox' checked={todo.compleate} onChange={handleTodoClick} />
        {todo.name}
      </label>
    </div>
  )
}

export default Todo
