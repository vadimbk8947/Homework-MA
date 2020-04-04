import React from "react";
import "./Login.scss";

export default function Login() {
  return (
    <div className="login__wrapper">
      <form className="form">
        <span className="form__title">Login</span>

        <input
          type="email"
          className="form__email"
          placeholder="Enter your username"
        />
        <input
          type="password"
          className="form__password"
          placeholder="Enter your password"
        />

        <label className="form__label-remember">
          <input type="checkbox" />
          Remember me
        </label>

        <button className="form__submit">Login</button>
      </form>
    </div>
  );
}
