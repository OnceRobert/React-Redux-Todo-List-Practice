import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/reducers/todosSlice"

const store = configureStore({
    reducer: {
        todoList: todosReducer,
        newTodoItem: {},
    },
});

export default store;