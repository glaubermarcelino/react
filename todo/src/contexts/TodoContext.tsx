import React, { createContext, useEffect, useState } from "react";
import { TodoContextType } from "./TodoContextType";
import { Todo } from "../models/Todo";
import { get,save } from "../services/TodoService";

//createContext é um hooks que cria o context para o programador
//recebendo uma interface(contrato) que contem as funções e variaveis
//disponiveis para todo o sistema
export const TodoContext = createContext<TodoContextType>({
  //Iniciar a declaração das variaveis e metodos como vazios
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  toggle: () => {},
});

//Define os valores recebidos para inicialização de variaveis e métodos
//O provider distribui os recursos abaixo para toda a aplicação
//Sempre garantindo o singleton em toda aplicação
const TodoProvider = (props: any) => {
  const [todos, setTodos] = useState<Todo[]>(get);

  //Ficara observando as mudanças e salvará quando for alterado
  useEffect(() => {
    save(todos);
  },[todos]);

  const addTodo = (title: string) => {
    const todo: Todo = { id: todos.length + 1, title: title, done: false };
    setTodos([...todos, todo]);
  };
  const removeTodo = (todo: Todo) => {
    const index = todos.indexOf(todo);
    setTodos(todos.filter((_, i) => i !== index));
  };
  const toggle = (todo: Todo) => {
    const index = todos.indexOf(todo);
    todos[index].done = !todo.done;
    setTodos([...todos]);
  };

  return (
    //Passando todas as funções disponiveis para os elementos filhos possuirem acesso
    //Caso não queira passar alguma função especifica basta não informa-la
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggle }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
