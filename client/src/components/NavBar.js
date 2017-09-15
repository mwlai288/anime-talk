import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Nav = styled.div`
  width: 95%;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5%;
  background-image: url('https://i.imgur.com/454X3iT.png?2');
  background-size: contain;
  box-shadow: 0px 1px 6px black;
  text-size: 25px;
  a {
    text-decoration: none;
    margin: 0 5px;
    &:visited {
      color: white;
    }
  }
`;

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      loggedIn: false
    };
  }

  componentWillMount() {
    this._isLoggedIn();
  }
  componentWillReceiveProps() {
    this._isLoggedIn();
  }

  _isLoggedIn = async () => {
    const response = await axios.get("/auth/validate_token");
    this.setState({
      user: response.data.data,
      loggedIn: response.data.success
    });
  };
  
  _logOut = async () => {
    console.log("CLICK");
    const response = await axios.delete("/auth/sign_out");
    //Forces refresh of browser
    window.location.reload();
    localStorage.clear();
  };

  render() {
    if (this.state.loggedIn) {
      return (
        <Nav>
          <Link to="/">
            <h1>Anime Talk</h1>
          </Link>
          <div>
            <span>Signed In As: {this.state.user.email}</span>
            <a href="#" onClick={this._logOut}> Log Out </a>
          </div>
        </Nav>
      );
    }
    return (
      <Nav>
        <Link to="/">
        <h1>Anime Talk</h1>
        </Link>
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      </Nav>
    );
  }
}

export default NavBar;