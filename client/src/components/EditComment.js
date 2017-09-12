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

    // componentWillMount() {
    //     this._AddComment()
    // }
    
    _fetchAddComment = async () => {
        const id = this.props.match.params.id
        try {
            const res = await axios.get(`/api/posts/${id}`);
            await this.setState({posts: res.data.posts});
            return res.data;
        }
        catch (err) {
            console.log(err)
        }
    }

    _handleChange = (e) => {
        const newState = {...this.state.posts}
        newState[e.target.name] = e.target.value
        this.setState({posts: newState})
    }

    _EditComment = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id
        const payload = this.state.posts
        try {
            const res = axios.patch(`/api/posts/${id}`, payload)
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const id = this.state.posts.id
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="edit">Edit Comment: </label>
                        <input onChange={this._handleChange} type="text" name="comment" value={this.state.posts.comment} />
                    </div>
                    <button onClick={this._EditComment}>Submit</button>
                </form>
                <br />
                <Link to={`/posts/${id}`}><button>Back</button></Link>
            </div>
        );
    }
}

export default EditComment;