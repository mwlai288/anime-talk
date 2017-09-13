import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

import EditComment from './EditComment';
// import posts.Comments from './Comments';

class Anime extends Component {
    constructor(){
        super();
        this.state = {
            animes: {},
            posts: []            
        }
    }

    componentWillMount() {
        const animeId = this.props.match.params.id;
        this._fetchAnimes(animeId)
        const postsId = this.props.match.params.id;
        this._fetchPost(postsId)
    }

     _fetchAnimes = async (animeId) => {
        try {
            const response = await axios.get(`/api/animes/${animeId}`)
            console.log(response.data)
            await this.setState({ animes: response.data.animes });
            return response.data;
        }
        catch (err) {
            await this.setState({error: err.message})
            return err.message
        }
    }

     _fetchPost = async (postsId) => {
    try {
        const response = await axios.get (`/api/animes/${postsId}/posts`);
        console.log(response)
        await this.setState({posts: response.data});
        return response.data;
    }
    catch (err){
        console.log(err)
        await this.setState({error: err.message})
    }
}


    render() {
        const id = this.props.match.params.id        
        return (
            <div>
              <h1>{this.state.animes.title}</h1>
              <h3>Plot: </h3> 
              <p>{this.state.animes.plot}</p>
              <img src={this.state.animes.poster} alt=''/>
              {this.state.posts.map((post, i) => {
                return <div index ={i}> {post.comment} 
                <Link to={`/anime/${id}/posts/${id}/edit`}>Edit comment</Link>
             </div> 
              })} 
              <Link to={`/anime/${id}/posts`}>Add a comment</Link>
              
            </div>
        );
    }
}

export default Anime;