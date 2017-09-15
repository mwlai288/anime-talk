import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Anime from "./components/Anime";
import AnimeList from './components/AnimeList';
import AddComments from './components/AddComments';
import EditComment from './components/EditComment'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SearchAnime from './components/SearchAnime'
import { setAxiosDefaults } from './util';
import NavBar from './components/NavBar';
import styled from 'styled-components';

const Style = styled.div`
font-family: 'Montserrat', sans-serif;


`
class App extends Component {
  componentWillMount(){
    setAxiosDefaults();
  }
  
  render() {
    return (
      <Router>
        <Style>
        <div className="App">
          <div>
          <NavBar />  
          </div>
          <Route exact path="/" component={AnimeList} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/anime/:id" component={Anime} />
          <Route exact path="/anime/:id/posts" component={AddComments} />
          <Route exact path="/anime/:animeId/posts/:id/edit" component={EditComment} />
          <Route exact path="/search" component={SearchAnime} />
        </div>
        </Style>
      </Router>
      
    );
  }
}

export default App;
