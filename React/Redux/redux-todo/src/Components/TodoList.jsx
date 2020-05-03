import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

import { toggleTodo } from "../store/actions/actions";
import getVisibleTodos from "../store/reducers/getVisibleTodos";
// import getVisibleTodos from "../store/reducers/getVisibleTodos";

function TodoList({ todos, toggleTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
  // todos: state.todos,
});

const matchDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, matchDispatchToProps)(TodoList);
