import { Fragment } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = ({ loggedIn, manageSession }) => {
  return (
    <Fragment>
      <div className="nav-container">
        <ul>
          <Link to="/">Game</Link>
        </ul>
        <ul>
          <Link to="/about">About</Link>
        </ul>
        <ul className="nav-profile">
          <Link to="/profile">My Profile</Link>
        </ul>
        <ul>
          <Link to="/mockpaper">Mock Papers</Link>
        </ul>
        <div className="align-right">
          <label>{`${loggedIn ? "Welcome User" : "Welcome Guest"}`}</label>
          <i
            className="fa fa-user fa-2x"
            title={`Click Here To ${loggedIn ? "Log Off" : "Log in"}`}
            aria-hidden="true"
            onClick={manageSession}
          ></i>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
