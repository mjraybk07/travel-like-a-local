import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
var Nav = (props) => {
  return (

    <nav className="navbar" data-testid="navbar">
        <div className="logo">
          <h3 data-testid="navbar h3">Travel Like a Local</h3>
        </div>

        <div className="header-links">
        <Link to="/explore">Explore</Link>
        <Link to="/trips">Trips</Link>
        <Link to="/suggestions">Suggestions</Link>
        <Link to="/friends">Friends</Link> 
        {/* <div className="login-signup"> */}
          {/* {props.userName !== 'not logged in' && <span>Hello {props.userName}!     </span>} */}
          
          {props.userName !== 'not logged in' && <a data-testid="logout" className="logout-button" href="logout">Logout</a>}
          {props.userName === 'not logged in' && <a data-testid="signup" href="signup">SignUp</a>}
          {props.userName === 'not logged in' && <a data-testid="login" href="login">Login</a>}

      </div>
    </nav>
  );
};

export default Nav;
