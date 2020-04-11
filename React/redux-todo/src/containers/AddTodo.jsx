import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/index";

function AddTodo({ dispatch }) {
  let input;
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }

          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input type="text" ref={(elem) => (input = elem)} />
        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default connect()(AddTodo);
