

import { useRef } from 'react';

function TodoForm({onAddTodo}) {
    const todoTitleInput = useRef('');

    function handleAddTodo(event){
        event.preventDefault() //prevents from refreshing the page when the user click on Add todo
        //console.dir(event.target.title) //use this console statement to figure out how to access the input value from the form. 
        const title = event.target.title.value;
        onAddTodo(title);
        event.target.title.value = "";

        todoTitleInput.current.focus();


    }


    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="TodoTitle">Todo</label>
            <input type="text" id="TodoTitle" name="title" ref={todoTitleInput}/> 
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default TodoForm;

