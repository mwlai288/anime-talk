// import React, { Component } from 'react';
// import axios from 'axios';

// class Comment extends Component {
//   constructor() {
//     super();
//     posts: {
//       comment: ''
//     }
//   }

//   componentWillMount(){
//     const postsId = this.props.match.params.id;
//     this._fetchPost(postsId)
//   }

//   _fetchPost = async (postsId) => {
//     try {
//         const response = await axios.get ('/api/animes/:id/posts');
//         await this.setState({posts: response.data.comment});
//         return response.data;
//     }
//     catch (err){
//         console.log(err)
//         await this.setState({error: err.message})
//     }
// }
//  render() {
//     return (
//       <div>
//         <p>{this.state.posts.comment}</p>
//       </div>
//     );
//   }
// }

// export default Comment;