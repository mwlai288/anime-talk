import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AnimeList from "./components/AnimeList";
import Anime from "./components/Anime";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <h1>Anime Talk</h1>
            <div>
              <Link to="/">Anime</Link>
              <Link to="/anime/1">Single Anime</Link>
            </div>
          </div>
          <Route exact path="/" component={AnimeList} />
          <Route path="/anime/:id" component={Anime} />
        </div>
      </Router>
    );
  }
}

export default App;
