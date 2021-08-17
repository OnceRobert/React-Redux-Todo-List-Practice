import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectTodoById, ToggleTodo, RemoveTodo} from "../reducers/todosSlice";
import "../styles/TodoItem.css"


function TodoItem(props){
    const todo = useSelector(state => selectTodoById(state,props.itemId));
    const dispatch = useDispatch();

    function handleClick(){
        dispatch(ToggleTodo(props.itemId));
        console.log("I have been Clicked");
    }

    function handleRemove(event){
        dispatch(RemoveTodo(props.itemId));
        event.stopPropagation();
        console.log("I keel you");
    }

    const todoStatus = todo.done ? "done" : "";

    return (
        <div className={`TodoItem ${todoStatus}`} onClick={handleClick} >
            {todo.text} 
        <div className="removeButton" onClick={handleRemove}>X</div>
    </div>
    );
}

export default TodoItem;