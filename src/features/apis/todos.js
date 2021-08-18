import api from "./index";

export const getTodos = () =>{
    return api.get("/todos");
}

export const addTodo = (text) =>{
    return api.post("/todos",{text});
}

