import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import store from '../../../store/store';
import { AddTodo } from '../reducers/todosSlice';

function TodoForm(){
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function changeHandler(event){
        setText(event.target.value);
        //console.log(event.target.value);
    }
    
    function addHandler(){
        dispatch(AddTodo(text));
        //console.log("Will add to do list: ", text);        
    }

    return(
        <div>
            Todo Form: 
            <input type="text"
                placeholder="input a new item"
                value={text}
                onChange={changeHandler}
            />
            <button onClick={addHandler}>Add</button>
        </div>

    );
}

export default TodoForm;