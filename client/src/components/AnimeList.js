import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components'
import SignUp from './SignUp';
import SignIn from './SignIn';

const HomePagewrap = styled.div`
display: inline-flex;
flex-wrap: wrap;
img {
     width: 100%;
     max-height: 300px;
     padding: 5px;
`

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
    if (localStorage['access-token'] )
    {
    return (
      <div>
      <p>Can't Find An Anime?</p>
      <Link to="/search"><button>Search Here</button></Link>
        <h1>Select an Anime</h1>
        <HomePagewrap>{this.state.animes.map(anime => (
          <div key={anime.id}>
            <Link to={`/anime/${anime.id}`}><img src ={anime.poster} alt=''/></Link> 
          </div>
        ))}</HomePagewrap>
      </div>
    )
      } else {
        return <div> 
        <h1>Pikachu says, "Please Sign Up or Sign In to continue."</h1>
        </div>
      }
  }
}

export default AnimeList;