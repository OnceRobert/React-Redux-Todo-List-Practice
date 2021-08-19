import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from '../../apis/todos';
import { selectTodoById, ToggleTodo, RemoveTodo,EditTodo} from "../reducers/todosSlice";
import "../styles/TodoItem.css";
import CloseCircleOutlined from '@ant-design/icons';
import { EditOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { useState } from "react";



function TodoItem(props){
    const todo = useSelector(state => selectTodoById(state,props.itemId));
    const dispatch = useDispatch();
    const [text, setText] = useState(todo.text);
    const [actualtext, setActual] = useState(todo.text);

    function handleClick(){
        updateTodo(props.itemId,{done: !todo.done}).then((response) =>{
            dispatch(ToggleTodo(props.itemId));
        });
        console.log(todo);
        console.log("I have been Clicked");
    }

    function handleRemove(event){
        removeTodo(props.itemId).then(
            dispatch(RemoveTodo(props.itemId))
        )
        event.stopPropagation();
    }

    const [isModalVisible, setIsModalVisible] = useState(false);

    function showModal(event){
        event.stopPropagation();
        setIsModalVisible(true);
        
    };

    function handleOk(event){
        event.stopPropagation();
        if(text!==""){
            updateTodo(props.itemId,{text: text}).then((response) =>{
                dispatch(EditTodo(response));
            });
        }else
            setText(actualtext);
        setIsModalVisible(false);
    };

    function handleCancel(event){
        setText(actualtext);
        event.stopPropagation();
        setIsModalVisible(false);
    };

    function changeHandler(event){
        setText(event.target.value);
        //console.log(event.target.value);
    }

    const todoStatus = todo.done ? "done" : "";
//🍭
    return (
        <div>
            <div className={`TodoItem ${todoStatus}`} onClick={handleClick}>
                <button className="update Button" onClick={showModal}>{todoStatus!=="done"? <EditOutlined /> : ""}</button>
                {text}  
                <button className="remove Button" onClick={handleRemove}>🍭</button>
            </div>
            <div>
                <Modal title="Edit todo Item" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} className="Modal" clicked>
                    <input type="text" value={text} onChange={changeHandler}/>
                </Modal>
            </div>
        </div>
    );
}

export default TodoItem;

