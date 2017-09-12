import React, { Component } from 'react';
import axios from 'axios';
import AddComments from './AddComments';
import EditComment from './EditComment';

class Anime extends Component {
    constructor(){
        super();
        this.state = {
            animes: {},
            title: '',
            plot: '',
            poster: ''
        }
    }

    componentWillMount() {
        const animeId = this.props.match.params.id;
        this._fetchAnimes(animeId)
    }

    _fetchAnimes = async (animeId) => {
        try {
            const response = await axios.get(`/api/animes/${animeId}`)
            await this.setState({animes: response.data.animes, plot: response.data.animes.plot, poster: response.data.animes.poster, comment: response.data.animes.comment});
            return response.data;
        }
        catch (err) {
            await this.setState({error: err.message})
            return err.message
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.animes.title}</h1>
                <h3>Plot: </h3> 
                <p>{this.state.animes.plot}</p>
              <img src={this.state.animes.poster} alt=''/>
              <div>{this.state.animes.comment}</div>

              <AddComments />
              <EditComment />
            </div>
        );
    }
}

export default Anime;