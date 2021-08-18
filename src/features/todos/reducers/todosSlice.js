import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { useState } from "react";
import { v4 as uuid} from "uuid";
import { getTodos } from "../../apis/todos";

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
    ids: ["1", "2","3"],
    entities: {
        1:{
            id:"1",
            text: "testing todo",
            done: false,
        },
        2:{
            id:"2",
            text: "testing todo two",
            done: false,
        },
        3:{
            id:"3",
            text: "pay for cbz",
            done: false,
        },
    },
});
// const initialState = todosAdapter.getInitialState({
//     ids: SampleData.map((item) => item.id),   
//     entities: getTodos()
    
// });

const todoSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        AddTodo(state, action){
            todosAdapter.addOne(state,action.payload);
            //console.log("Add todo action: ", action);
            return state;

        },
        ToggleTodo(state, action){
            const todo = state.entities[action.payload];
            todo.done = !todo.done;
        },
        RemoveTodo(state, action){
            //const todo = state.entities[action.payload];
            todosAdapter.removeOne(state,action);
        },
        AddTodos(state, action){
            todosAdapter.addMany(state, action.payload);
        }

        
    }
});

export default todoSlice.reducer;

export const { 
    selectIds: selectTodoIds, 
    selectById: selectTodoById,
    selectAll: selectTodos
} = todosAdapter.getSelectors(
        (state) => state.todoList
    );

export const {AddTodo, ToggleTodo, RemoveTodo, AddTodos} = todoSlice.actions;

const selectTodoList = (state) => state.todoList.entities;

// export const selectDoneList = createSelector([selectTodoList], (todos) => {
//     //console.log("selectTodos: ", selectTodoList);
//     //console.log("todos: ",todos);
//     return Object.values(todos).filter((todo)=>todo.done);
// })


export const selectDoneList = createSelector([selectTodos], (todos) => todos.filter((todo)=>todo.done));
