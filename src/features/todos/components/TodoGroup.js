import { initialTodoList } from "../../../common/constants/constants";
import { getAtllTodoIds } from "../../../utils/ulits";
import TodoItem from './TodoItem';


function TodoGroup(){
    return(
        <div>
            TodoGroup
            {
                getAtllTodoIds(initialTodoList).map(id =>(
                    <TodoItem key={id} id={id} />
                ))
            }

        </div>

    );
}

export default TodoGroup;