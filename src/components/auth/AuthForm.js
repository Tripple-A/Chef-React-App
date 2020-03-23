import React from "react";
import "../styles/AuthForm.scss";
import { Link } from "react-router-dom";
import { AuthImg } from "../../helpers/svgs";
import { Eye } from "../../helpers/svgs";

export const AuthForm = ({
  type,
  authHeader,
  name,
  handleSubmit,
  email,
  password,
  handleChange
}) => {
  return (
    <div className="authWrapper">
      <div className="authImg">
        <AuthImg />
        <div className="hot">
          <h3>Hot, Fresh food.</h3>
          <p>Delivered fast to your Home.</p>
          <p>Sign up as a vendor or order from our verified vendors</p>
        </div>
      </div>
      <div className="authFormWrapper">
        <h2>{authHeader}</h2>
        <form className="authForm" onSubmit={handleSubmit}>
          {type === "signup" ? (
            <div className="authField">
              <div>
                <label for="name">Name: </label>
              </div>

              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={name}
                placeholder="enter your first name"
              />
            </div>
          ) : (
            ""
          )}
          <div className="authField">
            <div>
              <label for="email">E-mail: </label>
            </div>

            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={email}
              placeholder="give yourself a username"
            />
          </div>
          <div className="authField">
            <div>
              <label for="name">Password: </label>
            </div>
            <div className="passwordInput">
              <input
                type="password"
                id="password"
                name="password"
                onChange={handleChange}
                value={password}
                placeholder="we won't force a password style on you."
              />
              <Eye />{" "}
            </div>
          </div>

          <button type="submit" className="submitAuth">
            {authHeader}
          </button>
          <div className="switchAuth">
            {type === "signup" ? (
              <div>
                Already Signed up? <Link to="/">Log in</Link>.{" "}
              </div>
            ) : (
              <div>
                Don't have an account yet? <Link to="/signup">Sign up</Link>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};