import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import DeletePost from './DeletePost'
import EditComment from './EditComment';
import styled from 'styled-components';
// import posts.Comments from './Comments';


const TextBox = styled.div`
background-color: rgba(236, 236, 214, .5);
font-size: 25px;
text-align: center;
`

const TitleStyle = styled.div`
font-size: 30px;
text-align: center;
`
const StyledPoster = styled.div`
display: flex;
justify-content: flex-end;
`

const StyledText = styled.div`
display: flex;
justify-content: flex-start;
flex-direction: row;
flex-wrap: wrap;
`

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
              <TitleStyle>{this.state.animes.title}</TitleStyle>
              <StyledText>Plot: {this.state.animes.plot} </StyledText> 
           
              <StyledPoster><img src={this.state.animes.poster} alt=''/></StyledPoster>
              {this.state.posts.map((post, i) => {
                return <div index ={i}> {post.comment} 
                <Link to={`/anime/${id}/posts/${post.id}/edit`}><button>Edit comment</button></Link>
                <DeletePost animeId = {this.props.match.params.id} postId = {post.id}/>
             </div> 
              })} 

            
              <Link to={`/anime/${id}/posts`}><button>Add a comment</button></Link>
              
            </div>
        );
    }
}

export default Anime;