import React, { Component } from "react";
import { connect, Connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectPost } from "../actions/postAction";

class PostList extends Component {

  createListItems() {
    return this.props.allPosts.map((post) => {
       return <li onClick={() => this.props.selectPost(post)} key={post.id}>{post.title} - {post.body}</li>
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

function matchDispatcherToProps(dispatch) {
    return bindActionCreators({selectPost: selectPost},dispatch)
}

export default connect(mapStateToProps, matchDispatcherToProps)(PostList);
