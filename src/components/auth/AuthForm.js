import React from "react";
import "../../styles/AuthForm.scss";
import { Link } from "react-router-dom";
import { AuthImg, Blob, Eye } from "../../helpers/svgs";

export const AuthForm = ({
  type,
  authHeader,
  name,
  handleSubmit,
  email,
  password,
  handleChange,
  errors,
  authenticating
}) => {
  return (
    <div className="authWrapper">
      <div className="authImg">
        <AuthImg />
        <div className="hot">
          <h3 className="text-2xl md:text-4xl">Hot, Fresh food.</h3>
          <p>Delivered fast to your Home.</p>
          <p>Sign up as a vendor or order from our verified vendors</p>
        </div>
      </div>
      <div className="authFormWrapper">
        <h1>{authHeader}</h1>
        {errors.length > 0 ? <div className="authError">{errors} </div> : ""}
        <form className="authForm" onSubmit={handleSubmit}>
          {type === "signup" ? (
            <div className="authField">
              <div>
                <label htmlFor="name">Name: </label>
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
              <label htmlFor="email">E-mail: </label>
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
              <label htmlFor="name">Password: </label>
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
              <div>
                <Eye />{" "}
              </div>
            </div>
          </div>
          <div className="submit">
            <button type="submit" className="submitAuth">
              {authenticating ? "" : authHeader}
              {authenticating ? (
                <svg className="spinner" viewBox="0 0 50 50">
                  <circle
                    className="path"
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    strokeWidth="5"
                  ></circle>
                </svg>
              ) : (
                ""
              )}
            </button>
          </div>

          <div className="switchAuth">
            {type === "signup" ? (
              <div>
                <p className="text-left">
                  Already Signed up? <Link to="/">Log in</Link>.{" "}
                </p>
              </div>
            ) : (
              <div>
                <p className="text-left">
                  Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
