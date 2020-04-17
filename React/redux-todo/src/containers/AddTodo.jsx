import React from "react";
import { addTodo } from "../store/actions/actions";
import { connect } from "react-redux";

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
        <button>Create todo</button>
      </form>
    </div>
  );
}

export default connect()(AddTodo);
