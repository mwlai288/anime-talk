import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class componentName extends Component {

  _handleDelete = async () => {
    const animeId = this.props.animeId;
    const postsId = this.props.postId
    console.log(`/api/animes/${animeId}/posts/${postsId}`)
    const response = await axios.delete(`/api/animes/${animeId}/posts/${postsId}`)
    await this.setState({posts: response.posts})
    this.props._fetchPost();
}
  render() {

    return (
      <div>
        <button onClick={() => {this._handleDelete()}}>Delete</button>
      </div>
    );
  }
}

export default componentName;