import { findRenderedComponentWithType } from "react-dom/test-utils";
import {initialTodoList} from "../../../common/constants/constants.js"
import {getTodoById} from "../../../utils/ulits.js"

function TodoItem(props){
    const todo = getTodoById(initialTodoList,props.id);
    return (
        <div>
            {todo.text}
        </div>
    );
}
export default TodoItem;