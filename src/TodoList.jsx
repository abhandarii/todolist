{/*extract from TodoList.jsx*/}

import React from 'react';
import TodoListItem from './TodoListItem';


{/*extract from TodoList.jsx*/}
function TodoList() {
    const todos = [
        {id: 1, title: "Review Resources"},
        {id: 2, title: "Take Notes"},
        {id: 3, title: "Code Out App"},
    ];
    
    return (
    <ul>
        {todos.map((todo) => (
            <TodoListItem key={todo.id} todo = {todo} />
            ))}
            </ul>
            );
        }

export default TodoList;
