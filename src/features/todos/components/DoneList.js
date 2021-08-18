import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import {selectDoneList} from "../reducers/todosSlice";
import "../styles/TodoItem.css";
import TodoItem from './TodoItem';



function DoneList(props){
    const todoIds = useSelector(selectDoneList);
    console.log(todoIds);
    //const todoStatus = state.selectById(id).done ==="done";
        //if(todoStatus==="done"){
        return(
            <div className="CenterMe">
                <h3>I DID THESE TODAY :D : </h3>
                {
                    todoIds.map((item) =>(
                        <TodoItem key={item.id} itemId={item.id} />
                        )
                    )
                }
    
            </div>
    
        );
    //}    
}

export default DoneList;