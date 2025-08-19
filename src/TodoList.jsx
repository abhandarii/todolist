{/*extract from TodoList.jsx*/}

import React from 'react';
import TodoListItem from './TodoListItem';


{/*extract from TodoList.jsx*/}
function TodoList({todos}) {
    
    return (
    <ul>
        {todos.map((todo)=>(
            <TodoListItem key={todo.id} todo ={todo}/>
            ))}
            </ul>
            );
        }

export default TodoList;