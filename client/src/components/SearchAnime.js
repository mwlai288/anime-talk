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
    
    async componentDidMount() {
      const search = this.state.search
      const url = (`https://api.themoviedb.org/3/search/tv?api_key=bc56e0122b5c08d32761ffa334304bd2&query=Naruto`)
      
      try {
          const res = await axios.get(url, 
            { transformRequest: [(data, headers) => {
              delete headers['access-token']
              delete headers['uid']
              delete headers['client']
              delete headers['expiry']
              delete headers['token-type']
              delete headers.common
              return data;
            }]
          });
          await this.setState({animes: res.data.results})
      } catch (err) {
          console.log(err);
      }
  }

//   _searchAnimes = async (e) => {
//       e.preventDefault();
//       const search = this.state.search
//       const apiKey = process.env.REACT_APP_UPLOADPRESET
//       const url= `https://www.omdbapi.com/?apikey=${apiKey}&t=${search}`
//       console.log(url)
//       try {
//         const res = await axios.get(url, 
//           {transformRequest: [(data, headers) => {
//             delete headers['access-token']
//             delete headers['uid']
//             delete headers['client']
//             delete headers['expiry']
//             delete headers['token-type']
//             delete headers.common
//             return data;
//       }]
//     });
//     await this.setState({animes: [res.data]})
//   } catch (err) {
//       console.log(err);
//   }
// }

_addAnime = (anime) => {
  const id = this.props.match.params.id
  const payload ={
    title: anime.name,
    plot: anime.overview,
    poster_path: anime.poster_path
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
        <h2>Search for an Anime</h2>  (won't work anymore because I cancelled the donations for the API key I was using.)
                      
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
          <h1>{anime.name}</h1>
          <h1>Plot: {anime.overview}</h1>
          <img src={`https://image.tmdb.org/t/p/w1000${anime.poster_path}`} alt="No Image Available" />
          
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