import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos }) {
  if (!todos) {
    return <li>Add todo...</li>;
  }

  return (
    <ul>
      {todos.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </ul>
  );
}
