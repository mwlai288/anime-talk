import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditComment extends Component {
    constructor() {
        super();
        this.state = {
            posts: {
                comment: ''
            }
        }
    }

    _handleChange = (e) => {
        const newState = {...this.state.posts}
        newState[e.target.name] = e.target.value
        this.setState({posts: newState})
    }

    _editComment = (e) => {
        e.preventDefault();
        const { animeId, id } = this.props.match.params
        const payload = this.state.posts
        try {
            const res = axios.patch(`/api/animes/${animeId}/posts/${id}`, payload)
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const { animeId, id } = this.props.match.params     
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="edit">Edit Comment: </label>
                        <input onChange={this._handleChange} type="text" name="comment" placeholder={this.state.posts.comment} />
                    </div>
                    <button onClick={this._editComment}>Submit</button>
                </form>
                <br />
                <Link to={`/anime/${animeId}`}><button>Back</button></Link>
            </div>
        );
    }
}

export default EditComment;