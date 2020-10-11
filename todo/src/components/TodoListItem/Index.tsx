import React, { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import { TodoContextType } from "../../contexts/TodoContextType";
import { Todo } from "../../models/Todo";

interface TodoListItemProps {
  todo: Todo;
}

const Index = (props: TodoListItemProps) => {
  const { removeTodo, toggle } = useContext<TodoContextType>(TodoContext);
  const handleChange = (event: any) => {
    toggle(props.todo);
  };
  const onRemove = (todo: Todo) => {
    removeTodo(todo);
  };
  return (
    <tr className="uk-animation-slide-bottom-medium">
      <td className="uk-width-auto">
        <label>
          <input
            className="uk-checkbox"
            type="checkbox"
            checked={props.todo.done}
            onChange={(e) => handleChange(e)}
          />
        </label>
      </td>
      <td className="uk-width-expand">{props.todo.title}</td>
      <td className="uk-width-auto">
        <button
          className="uk-icon-button uk-button-danger"
          uk-icon="trash"
          onClick={() => onRemove(props.todo)}
        />
      </td>
    </tr>
  );
};

export default Index;
