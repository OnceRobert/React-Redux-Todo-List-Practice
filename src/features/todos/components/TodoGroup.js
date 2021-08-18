import React from "react";
import TodoItem from './TodoItem';
import {selectTodoIds} from "../reducers/todosSlice";
import { useSelector } from "react-redux";
import {getTodos} from '../../apis/todos'

function TodoGroup(){
    const todoIds = useSelector(selectTodoIds);
    //const todoIds = getTodos()

    
    return(
        <div>
            {
                todoIds.map((id) =>(
                    <TodoItem key={id} itemId={id} />
                ))
            }

        </div>

    );
}

export default TodoGroup;