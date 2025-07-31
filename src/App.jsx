
import './App.css'
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import React, { useState } from 'react';


function App() {
  const todos = [
    {id: 1, title: "Review Resources"},
    {id: 2, title: "Take Notes"},
    {id: 3, title: "Code Out App"},
  ]

  const [newTodo, setNewTodo] = useState("New Day, another Todo");

  return (
    <div className = "coming-soon">
      <h1>Todo List</h1>
      <TodoForm />
      <p>
        {"New Todos"}
      </p>
      <TodoList todos = {todos} />
      </div>
      )
    }

export default App;
