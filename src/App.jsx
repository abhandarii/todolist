
import './App.css'
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import React, { useState } from 'react';

function TodoList({todoList}) {
  return(
    <ul>
      {todoList.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
    </ul>
  )

}

export default TodoListS;
