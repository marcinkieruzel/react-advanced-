import React, { forwardRef, useImperativeHandle, useRef } from "react";

//Lets assume this component is a part of external library and we dont have access to its code
//Lets expose the access with the help of useImperativeHandle
const LoginForm = forwardRef((_, ref) => {
  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useImperativeHandle(ref, () => ({
    login: loginRef.current,
    password: passwordRef.current,
    submit: () => {
      buttonRef.current?.click();
    },
    reset: () => {
      loginRef.current!.value = "";
      passwordRef.current!.value = "";
    },
  }));

  return (
    <div className="container">
      <h1>Login Form</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            ref={loginRef}
            type="text"
            className="form-control"
            id="username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            ref={passwordRef}
            type="password"
            className="form-control"
            id="password"
          />
        </div>
        <button type="submit" className="btn btn-primary" ref={buttonRef}>
          Login
        </button>
      </form>
    </div>
  );
});

export default LoginForm;
