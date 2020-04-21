import React, { useRef, useEffect } from "react";

export default function UseRef() {
  const style = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    heigh: 300,
    border: "solid 2px teal",
    padding: 20,
    margin: "auto",
  };

  const userNameRef = useRef();

  useEffect(() => {
    return userNameRef.current.focus();
  }, []);

  return (
    <div>
      <form style={style}>
        <input ref={userNameRef} type="text" placeholder="name" />

        <input type="password" placeholder="pass" />

        <button></button>
      </form>
    </div>
  );
}
