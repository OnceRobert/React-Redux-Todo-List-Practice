import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { v4 as uuid} from "uuid";

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
const todoSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        AddTodo(state, action){
            todosAdapter.addOne(state, {
                id: uuid(),
                text: action.payload,
                done: false,
            });
            console.log("Add todo action: ", action);
            return state;

        }
    }
});

export default todoSlice.reducer;

export const { selectIds: selectTodoIds, selectById: selectTodoById} = todosAdapter.getSelectors(
        (state) => state.todoList
    );

export const {AddTodo} = todoSlice.actions;