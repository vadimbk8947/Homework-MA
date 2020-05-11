import React, { useEffect, useRef } from "react";

export default function UseRef2({ children, hideOnClick }) {
  const modalRef = useRef(modalRef);

  const handleDocumentClick = (e) => {
    if (!e.target.closest(`[data-isModal="true"]`));
  };
  useEffect(() => {
    document.addEventListener("click", hideOnClick);
    return document.removeEventListener("click", hideOnClick);
  }, []);

  const style = {
    display: "flex",
    flexDirection: "column",
    width: 300,
    heigh: 300,
    border: "solid 2px teal",
    padding: 20,
    margin: "auto",
    position: "relative",
  };

  return (
    <div style={style} ref={modalRef} data-isModal="true">
      <span
        onClick={hideOnClick}
        style={{
          color: "red",
          position: "absolute",
          right: 10,
          top: 10,
          cursor: "pointer",
        }}
      >
        X
      </span>
      {props.children}
    </div>
  );
}
