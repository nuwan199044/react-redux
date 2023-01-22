import React, { Component } from "react";
import { connect } from "react-redux";

class SelectedPost extends Component {
  render() {
    if(!this.props.selectedPost){
        return <h4>No selected post</h4>
    }
    return (
      <div>
        <h4>ID - {this.props.selectedPost.id}</h4>
        <h4>Title - {this.props.selectedPost.title}</h4>
        <h4>Content - {this.props.selectedPost.content}</h4>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedPost: state.selectedPost,
  };
}

export default connect(mapStateToProps)(SelectedPost);