import React from "react";
import AddTodo from "./containers/AddTodo";
import TodoList from "./Components/TodoList";
import { Footer } from "./Components/Footer";

export default function App() {
  return (
    <div>
      <AddTodo />
      <TodoList />
      <Footer />
    </div>
  );
}
