import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { TodoContextType } from "../../contexts/TodoContextType";
import TodoListItem from '../TodoListItem/Index';

const Index = () => {
  const {todos} = useContext<TodoContextType>(TodoContext);

  return (
    <table className="uk-table">
      <caption>Lista de Tarefas</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>Tarefa</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
        todos?.map(todo =>(<TodoListItem todo={todo} key={todo.id}/>))
        }
      </tbody>
    </table>
  );
};

export default Index;
