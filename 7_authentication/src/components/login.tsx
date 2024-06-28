import React, { useEffect, useRef } from "react";
import { useUserContext, useUserDispatchContext } from "../UserContext";
import { redirect, useNavigate } from "react-router-dom";
import { api } from "../api";

type Props = {};

const Login = ({}: Props): JSX.Element => {
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const setUser = useUserDispatchContext();
  const user = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.user) {
      console.log("User logged in");
      navigate("/");
    }
  }, [user.user]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    api
      .post("https://nest-demo.nis.noinputsignal.com/user/login", {
        email: email.current?.value,
        password: password.current?.value,
      })
      .then((data) => {
        console.log("Success:", data);

        setUser(data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            ref={email}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            ref={password}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
