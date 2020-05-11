import React from "react";
import { useHistory } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Info</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed incidunt
        qui doloremque nemo eum officiis reiciendis laborum mollitia, harum
        quibusdam aspernatur consectetur sunt voluptatem dicta blanditiis
        temporibus similique necessitatibus at!
      </p>
      <button className="btn" onClick={() => history.push("/")}>
        Back to todo list
      </button>
    </>
  );
};
