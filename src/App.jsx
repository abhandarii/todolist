
import './App.css'
import TodoList from './TodoList';
import TodoForm from './TodoForm';


function App() {
  const todos = [
    {id: 1, title: "Review Resources"},
    {id: 2, title: "Take Notes"},
    {id: 3, title: "Code Out App"},
  ]

  return (
    <div className = "coming-soon">
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList />
      </div>
      )
    }

export default App;
