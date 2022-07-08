import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

export const useTodos = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };
  const initialState = [];

  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] remove Todo",
      payload: id,
    });
  };
  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] toggle Todo",
      payload: id,
    });
  };

  const todosCount = todos.length

  const pendingTodos = todos.filter(todo=>!todo.done).length  

  return { handleDeleteTodo, handleNewTodo, handleToggleTodo, todos,todosCount ,pendingTodos};
};
