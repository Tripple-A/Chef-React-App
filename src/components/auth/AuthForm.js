import React from "react";
import "../styles/AuthForm.scss";
import { AuthImg } from "../svg/svgs";

export const AuthForm = ({
  type,
  authHeader,
  name,
  setName,
  handleSubmit,
  username,
  setUsername,
  password,
  setPassword,
  passwordConfirmation,
  setPasswordConfirmation
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
                onChange={e => setName(e.target.value)}
                value={name}
                placeholder="enter your first name"
              />
            </div>
          ) : (
            ""
          )}
          <div className="authField">
            <div>
              <label for="email">Username: </label>
            </div>

            <input
              type="text"
              name="username"
              onChange={e => setUsername(e.target.value)}
              value={username}
              placeholder="give yourself a username"
            />
          </div>
          <div className="authField">
            <div>
              <label for="name">Password: </label>
            </div>
            <input
              type="password"
              name="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
              placeholder="we won't force a password style on you."
            />
          </div>
          {type === "signup" ? (
            <div className="authField">
              <div>
                <label for="name">Password again: </label>
              </div>

              <input
                type="password"
                name="password"
                onChange={e => setPasswordConfirmation(e.target.value)}
                value={passwordConfirmation}
                placeholder="enter the same password as above."
              />
            </div>
          ) : (
            ""
          )}
          <button type="submit" className="submitAuth">
            {authHeader}
          </button>
        </form>
      </div>
    </div>
  );
};
