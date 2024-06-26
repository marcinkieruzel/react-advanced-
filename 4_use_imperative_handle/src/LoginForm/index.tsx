import React, { forwardRef } from "react";

//Lets assume this component is a part of external library and we dont have access to its code
//Lets expose the access with the help of useImperativeHandle
const LoginForm: React.FC = forwardRef((_, ref) => {
  return (
    <div className="container">
      <h1>Login Form</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input type="text" className="form-control" id="username" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
});

export default LoginForm;
