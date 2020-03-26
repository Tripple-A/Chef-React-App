import React from "react";
import "../styles/AuthForm.scss";
import { Link } from "react-router-dom";
import { AuthImg } from "../../helpers/svgs";
import { Blob } from "../../helpers/svgs";
import { Eye } from "../../helpers/svgs";

export const AuthForm = ({
  type,
  authHeader,
  name,
  handleSubmit,
  email,
  password,
  handleChange,
  errors
}) => {
  return (
    <div className="authWrapper">
      {/* {errors.length > 1 ? <div>error </div> : ""} */}
      <div className="authImg">
        <AuthImg />
        <div className="hot">
          <h3>Hot, Fresh food.</h3>
          <p>Delivered fast to your Home.</p>
          <p>Sign up as a vendor or order from our verified vendors</p>
        </div>
      </div>
      <div className="authFormWrapper">
        <h1>{authHeader}</h1>
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
              placeholder="example@example.com"
            />
            <Blob />
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
                placeholder="any combination of letters."
              />
              <Eye />{" "}
            </div>
          </div>
          <div className="submit">
            <button type="submit" className="submitAuth">
              {authHeader}
            </button>
          </div>

          <div className="switchAuth">
            {type === "signup" ? (
              <div>
                <p>
                  Already Signed up? <Link to="/">Log in</Link>.{" "}
                </p>
              </div>
            ) : (
              <div>
                <p>
                  Don't have an account yet? <Link to="/signup">Sign up</Link>
                </p>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
