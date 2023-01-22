import React, { Component } from "react";
import { connect, Connect } from "react-redux";

class PostList extends Component {

  createListItems() {
    return this.props.allPosts.map((post) => {
       return <li key={post.id}>{post.title} - {post.content}</li>
    })
  }

  render() {
    if(!this.props.allPosts) {
        return(<h3>Please click the button</h3>)
    }
    return <ul>{this.createListItems()}</ul>;
  }
}

function mapStateToProps(state) {
    return {
        allPosts: state.allPosts
    }
}

export default connect(mapStateToProps)(PostList);
