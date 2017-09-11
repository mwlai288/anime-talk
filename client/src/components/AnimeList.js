import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';


class AnimeList extends Component {
    constructor(){
        super();
        this.state = {
            animes: []
        }
    }
    componentWillMount(){
        this._fetchAnime
    }

    _fetchAnime = async () => {
        try {
            const res = await axios.get(`/api/animes`);
            await this.setState({animes: res.data});
            return res.data;
        }
        catch (err) {
            console.log(err)
        }
    }
    render() {
        return (
            <div>
                <h1>Select An Anime</h1>
                <Link to={`/animes/:id`}><button>Go to Forums</button></Link>
                {this.state.animes.map((animes) => {
                    return (
                        {/* <key={animes.id} animes={animes} /> */}
                    )
                })}
            </div>
        );
    }
}

export default AnimeList;