import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import styled from 'styled-components';


class SearchAnime extends Component {
    constructor() {
      super();
      this.state = {
        animes: [],
        search: ''
      }
    }
    componentWillMount() {

    }

    _searchAnimes = async (e) => {
      e.preventDefault();
      const search = this.state.search
      const apiKey = process.env.REACT_APP_UPLOADPRESET
      const url= `https://www.omdbapi.com/?apikey=${apiKey}&t=${search}`
      console.log(url)
      try {
        const res = await axios.get(url, 
          {transformRequest: [(data, headers) => {
            delete headers['access-token']
            delete headers['uid']
            delete headers['client']
            delete headers['expiry']
            delete headers['token-type']
            delete headers.common
            return data;
      }]
    });
    await this.setState({animes: [res.data]})
  } catch (err) {
      console.log(err);
  }
}

_addAnime = (anime) => {
  const id = this.props.match.params.id
  const payload ={
    title: anime.Title,
    plot: anime.Plot,
    poster: anime.Poster
  }
  try {
    const res = axios.post(`/api/animes/`, payload)
  } catch (err) {
    console.log(err);
  }
}

_handleChange = (e) => {
  const newState = {...this.state}
  newState[e.target.name] = e.target.value
  this.setState(newState)
}

  render() {
    const id = this.props.match.params.id
    // console.log(this.state.animes)
    return (

      <div>
        <h2>Search for an Anime</h2>  
                      
      <form>
        <div>
          <input onChange={this._handleChange} type='text' name='search' value={this.state.search} />
          <button onClick={this._searchAnimes}>Search</button>
        </div>
      </form>

      <h2>Results</h2>
      {this.state.animes.map((anime) => {
        return (
          <div>
          <h1>{anime.Title}</h1>
          <h1>Plot: {anime.Plot}</h1>
          <img src={anime.Poster} alt=''/>
           
            <button onClick={() => this._addAnime(anime)}>Add Anime</button>
            <Link to= "/"><button>Back To Anime</button></Link>
            </div>
           
        )
        
      })}
      </div>
      

    );
  }
}

export default SearchAnime;