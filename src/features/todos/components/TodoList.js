import React, { useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoGroup from './TodoGroup';
import "../styles/TodoList.css";
import { getTodos } from '../../apis/todos';
import { AddTodos } from '../reducers/todosSlice';
import { useDispatch } from 'react-redux';



function TodoList(){
    const dispatch = useDispatch();
    useEffect( () => {
        getTodos().then((response) => {
            dispatch(AddTodos(response.data))
        });
    }, []);
    return(
        <div>
            <h3>Your To Do List: </h3>
            <TodoForm />
            <TodoGroup />
        </div>

    )
}  


export default TodoList;