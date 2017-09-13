import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AnimeList from "./components/AnimeList";
import Anime from "./components/Anime";
import AddComments from './components/AddComments';
import EditComment from './components/EditComment'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <h1>Anime Talk</h1>
            <div>
              <Link to="/">Anime</Link>
            </div>
          </div>
          <Route exact path="/" component={AnimeList} />
          <Route exact path="/anime/:id" component={Anime} />
          <Route exact path="/anime/:id/posts" component={AddComments} />
          <Route exact path="/anime/:animeId/posts/:id/edit" component={EditComment} />
        </div>
      </Router>
    );
  }
}

export default App;
