import React from "react";
import { useUserContext, useUserDispatchContext } from "../UserContext";
import { Link } from "react-router-dom";
import { api } from "../api";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
  const user = useUserContext();
  const setUser = useUserDispatchContext();

  const logout = () => {
    api.get("/user/logout").then((data) => {
      if (data.status === 200) {
        setUser(null);
      }
    });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                {" "}
                Home{" "}
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/login">
                {" "}
                Login{" "}
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                {" "}
                Register{" "}
              </Link>
            </li>
            <li className="nav-item active">
              <p className="nav-link">
                Current user: {user ? user.user?.username : ""}
              </p>
            </li>
            <li className="nav-item active">
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </div>
      </nav>

      {children}
    </div>
  );
};

export default Layout;
