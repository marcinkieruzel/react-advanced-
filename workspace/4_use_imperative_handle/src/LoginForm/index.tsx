import React, {
  ForwardRefExoticComponent,
  forwardRef,
  useImperativeHandle,
} from "react";

//Lets assume this component is a part of external library and we dont have access to its code
//Lets expose the access with the help of useImperativeHandle

interface ImperativeAPI {
  submit: () => void;
  login: HTMLInputElement | null;
  password: HTMLInputElement | null;
  reset: () => void;
}

const LoginForm = forwardRef<ImperativeAPI, any>((_, ref) => {
  const loginRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const submitRef = React.useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => ({
    submit: () => {
      console.log("Form submitted");

      return submitRef.current && submitRef.current.submit();
    },
    login: loginRef.current,
    password: passwordRef.current,
    reset: () => {
      console.log("Form reset");
      return submitRef.current && submitRef.current.reset();
    },
  }));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("Form submitted");
    e.preventDefault();
  };

  return (
    <div className="container">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit} ref={submitRef}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            ref={loginRef}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            ref={passwordRef}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
});

export default LoginForm;
