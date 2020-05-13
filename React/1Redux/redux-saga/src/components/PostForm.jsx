import React, { useState } from "react";
import { connect } from "react-redux";
import { createPost, showAlert } from "../redux/actions";
import { Alert } from "./Alert";

const PostForm = ({ createPost, showAlert, alert }) => {
  const [state, setState] = useState({ title: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    const { title } = state;
    if (!title.trim()) {
      return showAlert("Cannot be empty");
    }

    const newPost = {
      title,
      id: Date.now().toString(),
    };

    createPost(newPost);
    setState({ title: "" });
  };

  const changeInputHandler = (e) => {
    e.persist();
    setState((prev) => ({
      ...prev,
      ...{
        [e.target.name]: e.target.value,
      },
    }));
  };

  return (
    <form onSubmit={submitHandler}>
      {alert && <Alert text={alert} />}

      <div className="form-group">
        <label htmlFor="title">Post title</label>
        <input
          name="title"
          value={state.title}
          onChange={changeInputHandler}
          type="text"
          className="form-control"
          id="title"
        />
      </div>
      <button className="btn btn-success">Create</button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  alert: state.app.alert,
});

const mapDispatchToProps = {
  createPost,
  showAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
