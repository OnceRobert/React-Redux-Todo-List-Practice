import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from '../../apis/todos';
import { selectTodoById, ToggleTodo, RemoveTodo} from "../reducers/todosSlice";
import "../styles/TodoItem.css";
import CloseCircleOutlined from '@ant-design/icons';


function TodoItem(props){
    const todo = useSelector(state => selectTodoById(state,props.itemId));
    const dispatch = useDispatch();

    function handleClick(){
        updateTodo(props.itemId,{done: !todo.done}).then((response) =>{
            dispatch(ToggleTodo(props.itemId));
        });
        console.log("I have been Clicked");
    }

    function handleRemove(event){
        removeTodo(props.itemId).then(
            dispatch(RemoveTodo(props.itemId))
        )
        event.stopPropagation();
        
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

