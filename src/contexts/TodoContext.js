import { createContext, useContext } from "react";

// Global Storage
export const TodoContext = createContext({
  todos: [
    {
      id: "097",
      todo: "msg",
      complete: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// acesser
export const useTodo = () => {
  return useContext(TodoContext);
};

// link provider
export const TodoProvider = TodoContext.Provider;
