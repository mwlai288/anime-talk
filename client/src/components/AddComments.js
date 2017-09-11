import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddComments extends Component {
    constructor() {
        super();
        this.state = {
            posts: {
                comment: '',
            }
        }
    }

    _handleChange = (e) => {
        const newState = {...this.state.posts}
        newState[e.target.name] = e.target.value
        this.setState({posts: newState})
    }

    // _fetchPosts = async () => {
    //     try {
    //         const res = await this.setState({posts: res.data});
    //         return res.data
    //     }
    //     catch (err) {
    //         console.log(err)
    //         await this.setState({error: err.message})
    //         return err.message
    //     }
    // }
    _newComment = (e) => {
        e.preventDefault();
        const payload = this.state.posts
        try {
            const res = axios.post(`/api/animes/:id/posts`, payload)
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="comment">Comment Below </label>
                      
                        <input onChange={this._handleChange} type="text" name="comment" value={this.state.posts.comment} />
                    </div>
                    <button onClick={this._newComment}>Submit</button>
                </form>
                <br />
                
            </div>
        );
    }
}

export default AddComments;