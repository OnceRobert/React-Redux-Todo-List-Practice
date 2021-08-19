import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { useState } from "react";
import { v4 as uuid} from "uuid";
import { getTodos } from "../../apis/todos";

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState();
// const initialState = todosAdapter.getInitialState({
//     ids: SampleData.map((item) => item.id),   
//     entities: getTodos()
    
// });

const todoSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        AddTodo(state, action){
            todosAdapter.addOne(state,action);
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
        },
        EditTodo(state, action){
            const todo = state.entities[action];
            todosAdapter.updateOne(state,action);
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

export const {AddTodo, ToggleTodo, RemoveTodo, AddTodos, EditTodo} = todoSlice.actions;

const selectTodoList = (state) => state.todoList.entities;

// export const selectDoneList = createSelector([selectTodoList], (todos) => {
//     //console.log("selectTodos: ", selectTodoList);
//     //console.log("todos: ",todos);
//     return Object.values(todos).filter((todo)=>todo.done);
// })


export const selectDoneList = createSelector([selectTodos], (todos) => todos.filter((todo)=>todo.done));
