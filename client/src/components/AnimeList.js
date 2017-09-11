import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AnimeList extends Component {
  constructor(){
    super();
    this.state = {
      error: '',
      animes: []
    }
  }

  componentWillMount(){
    this._fetchAnimes();
  }

  _fetchAnimes = async () => {
    try {
      const res = await axios.get('/api/animes');
      await this.setState({animes: res.data});
      return res.data;
    }
    catch (err) {
      console.log(err)
      await this.setState({error: err.message})
      return err.message
    }
    
  }

  render() {
    if (this.state.error){
      return <div>{this.state.error}</div>
    }
    return (
      <div>
        <h1>Select an Anime</h1>
        {this.state.animes.map(anime => (
          <div>
            <Link to={`/anime/${anime.id}`} >{anime.title}</Link> 
          </div>
        ))}
      </div>
    );
  }
}

export default AnimeList;