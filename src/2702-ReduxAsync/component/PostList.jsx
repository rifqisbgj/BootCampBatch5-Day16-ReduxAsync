import React, { Component } from "react";
// digunakan untuk menghubungan store dengan component
import { connect } from "react-redux";

// memanggil aksi reducers
import { fetchPostsAndUsers } from "../actions";
import UserList from "./UserList";

class PostList extends Component {
  // untuk merendering ulang component dengan data
  componentDidMount() {
    // mengambil data dari aksi fetchPostsAndUsers() yang telah disambungkan pada
    // parameter ke 2 dari connect()
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.listPost.map((post) => (
      <div key={post.id}>
        <div>
          <div>
            <h2>{post.title}</h2>
          </div>
          <p>{post.body}</p>
          <UserList userId={post.userId} />
        </div>
        <hr></hr>
      </div>
    ));
  }

  render() {
    if (!this.props.listPost) {
      return null;
    }
    return <div>{this.renderList()}</div>;
  }
}
// komponen akan mengikuti isi dari state.props dari store redux
const mapStateToProps = (state) => {
  return {
    // akan mengisikan/membuat props listPost yang berisi state.posts dari redux
    listPost: state.posts,
  };
};

// connect(stateStoreReduxtoCompProps, dispatchReduxtoCompProps)
export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
