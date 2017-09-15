import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddComments extends Component {
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


    _newComment = (e) => {
        e.preventDefault();
        const payload = this.state.posts
        const id = this.props.match.params.id
        console.log(payload)
        try {
            const res = axios.post(`/api/animes/${id}/posts`, payload)
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const id = this.props.match.params.id        
        return (
            <div>
                <form>
                    <div>           
                      <label htmlFor="comment">Comment Below </label>
                      <p>{this.state.posts.comment}</p>
                        <input onChange={this._handleChange} type="text" name="comment" value={this.state.posts.comment} />
                    </div>
                    <button onClick={this._newComment}>Submit</button>
                </form>
                <br />
                
                <Link to={`/anime/${id}`}><button>Back</button></Link>
                </div>
        );
    }
}

export default AddComments;