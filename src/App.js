import logo from './logo.svg';
import './App.css';
import TodoGroup from './features/todos/components/TodoGroup';
import TodoList from './features/todos/components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoGroup />
    </div>
  );
}

export default App;
