import React from "react";

export default function Todo({ text, onClick, completed }) {
  return (
    <li
      onClick={onClick}
      style={{ textDecoration: completed ? "line-through" : "none" }}
    >
      {text}
    </li>
  );
}
