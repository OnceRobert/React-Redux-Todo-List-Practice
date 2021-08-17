import React, { useState } from 'react';
import store from '../../../store/store';

function TodoForm(){
    const [text, setText] = useState("");

    function changeHandler(event){
        setText(event.target.value);
        //console.log(event.target.value);
    }
    
    function addHandler(){
        console.log("Will add to do list: ", text);
        const generatedId = Date.now();
        store.newTodoItem = 
        
        {
            id: {generatedId},
            text: text,
            done: false
        };
        
        
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