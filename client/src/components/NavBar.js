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
  text-size: 25px;
  a {
    text-decoration: none;
    margin: 0 5px;
    &:visited {
      color: white;
    }
  }
`;

const TextDiv = styled.div `
color: white;
font-size: 30px;
text-shadow: 2px 2px #C9AC07;
`
const LogOut = styled.div`
color: white;
text-shadow: 2px 2px #C9AC07;
`
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
            <TextDiv>Anime Talk</TextDiv>
          </Link>
          <div>
            <span><TextDiv> Signed In As: {this.state.user.email} </TextDiv></span>
             <LogOut a href="#" onClick={this._logOut}> Log Out </LogOut>
          </div>
        </Nav>
      );
    }
    return (
      <Nav>
        <Link to="/">
        <TextDiv>Anime Talk</TextDiv>
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