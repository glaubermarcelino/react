import React from "react";
import TodoContext from "../contexts/TodoContext";
import NavBar from "./NavBar/Index";
import TodoList from "./TodoList/Index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddTodo from "./AddTodo/Index";

const App = () => {
  return (
    <TodoContext>
      <Router>
        <NavBar />
        <br />
        <div className="uk-container">
          <Switch>
            <Route path="/create">
              <AddTodo />
            </Route>
            <Route path="/" exact>
              <h4>Minha Lista de Tarefas</h4>
              <TodoList />
            </Route>
            <TodoList />
            <div>Meu Primeiro APP</div>
          </Switch>
        </div>
      </Router>
    </TodoContext>
  );
};

export default App;
