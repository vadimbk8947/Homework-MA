import React, { useState } from "react";
import { connect } from "react-redux";

import { createPost } from "../../redux/postReducers";
import "./NewPost.css";

interface INewPost {
  createPost: (data: IFields) => void;
}

interface IFields {
  title: string;
  body: string;
}

const NewPost: React.FC<INewPost> = ({ createPost }) => {
  const [fields, setFields] = useState({
    title: "",
    body: "",
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();

    e.target.className === "form-title"
      ? setFields({ ...fields, title: e.target.value })
      : setFields({ ...fields, body: e.target.value });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    createPost(fields);
    setFields({ title: "", body: "" });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="form-title"
        type="text"
        placeholder="Enter post title"
        value={fields.title}
        onChange={handleOnChange}
        required
      />
      <textarea
        className="form-body"
        placeholder="Enter post body"
        value={fields.body}
        onChange={handleOnChange}
        required
      />
      <button className="form-button" type="submit">
        Create
      </button>
    </form>
  );
};

const mapDispatchToProps = {
  createPost,
};

export default connect(null, mapDispatchToProps)(NewPost);
