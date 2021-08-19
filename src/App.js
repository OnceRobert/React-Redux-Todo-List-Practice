import logo from './logo.svg';
import './App.css';
import DoneList from './features/todos/components/DoneList';
import TodoList from './features/todos/components/TodoList';
import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import NotFoundPage from './features/notfound/NotFoundPage';
import 'antd/dist/antd.css';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Header></Header>
          <BrowserRouter>
            <ul>
              <Link to="/"> go to the todo list page </Link>
              <Link to="/done">go to the done list page</Link>
            </ul>
            <Content>
              <div className="App">
            <Switch>
              <Route exact path="/" component={TodoList}/>
              <Route exact path="/done" component={DoneList} />
              <Route path="*" component={NotFoundPage} />
            </Switch>
            </div>
            </Content>
            
          </BrowserRouter>
      </Layout>
    </React.Fragment>
  );
}




export default App;
