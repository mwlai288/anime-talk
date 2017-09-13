import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Anime from "./components/Anime";
import AnimeList from './components/AnimeList';
import AddComments from './components/AddComments';
import EditComment from './components/EditComment'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { setAxiosDefaults } from './util';
import NavBar from './components/NavBar';


class App extends Component {
  componentWillMount(){
    setAxiosDefaults();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <div>
          <NavBar />  
            <h1>Anime Talk</h1>
            <div>
              <Link to="/">Anime</Link>
            </div>
          </div>
          <Route exact path="/" component={AnimeList} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/anime/:id" component={Anime} />
          <Route exact path="/anime/:id/posts" component={AddComments} />
          <Route exact path="/anime/:animeId/posts/:id/edit" component={EditComment} />
        </div>
      </Router>
    );
  }
}

export default App;
