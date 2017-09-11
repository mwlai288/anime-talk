import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AnimeSearch extends Component {
    constructor(){
        super();
        this.state = {
            animes: [],
            search: ''
        }
    }

    _searchForAnime = async (e) => {
        const search = this.state.search
        try {
            const res = await axios.get(`http://api.anidb.net:9001/httpapi?request=anime`)
            this.setState({animes: res.data.results})
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
        return (
            <div>
                <h1>Find An Anime</h1>
                <form>
                    <div>
                    <label htmlFor="search">Search: </label>
                        <input onChange={this._handleChange} type="text" name="search" value={this.state.search} />
                    </div>
                    <button onClick={this._searchMovie}>Submit</button>
                    <h3>Animes:</h3>
                    {this.state.animes.map( (anime) => {
                    return (
                        {/* <key={movie.id} movie={movie} /> */}
                    )
                    })}
                </form>
                <Link to={`/animes/${id}`}><button>Back</button></Link>
            </div>
        );
    }
}

export default AnimeSearch;