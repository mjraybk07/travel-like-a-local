import React from "react";
import ReactDOM from "react-dom";

var Nav = (props) => {
  return (
    <nav className="navbar" data-testid="navbar">
      <div class="clearfix">
        <div className="logo">
          <h3 data-testid="navbar h3">Travel Like a Local</h3>
          <img />
        </div>
        <div className="login-signup">
          {props.userName !== 'not logged in' && <span data-testid="success" >Hello {props.userName}!</span>}
          {props.userName === 'not logged in' && <a data-testid="login" href="login">Login</a>}
          {props.userName !== 'not logged in' && <a data-testid="logout" href="logout">Logout</a>}
          {props.userName === 'not logged in' && <a data-testid="signup" href="signup">Sign Up</a>}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
