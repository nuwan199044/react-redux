import React, { Component } from "react";
import { fetchPosts } from "../actions/postAction";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class ButtonComponent extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.fetchPosts()}>Get All Posts</button>
      </div>
    );
  }
}

function matchDispatcherToProps(dispatch) {
    return bindActionCreators({fetchPosts: fetchPosts},dispatch)
}

export default connect(null, matchDispatcherToProps)(ButtonComponent);