import React from "react";
import "./SignUp.scss";

export default function SignUp() {
  return (
    <div className="sign-up__wrapper">
      <form className="form">
        <label className="form__label">
          Username
          <input type="email" />
        </label>

        <label className="form__label">
          First name
          <input type="text" />
        </label>

        <label className="form__label">
          Last name
          <input type="text" />
        </label>

        <label className="form__label">
          Password
          <input type="password" />
        </label>

        <label className="form__label">
          Repeat password
          <input type="password" />
        </label>

        <label className="form__label">
          Telephone number
          <input type="tel" />
        </label>

        <div className="form__submit">
          <button className="form__submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
}
