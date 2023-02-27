import React, { Component } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { connect } from "react-redux";

class UserList extends Component {
  render() {
    // mengisi var user dengan props yang sudah diset pada mapStateToProps
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return (
      <>
        {" "}
        <AiOutlineUser /> {user.name}
      </>
    );
  }
}

// ownProps diambil dari postList <UserList userId=value />
// atau ownProps merupakan props yang dimiliki dari class UserList/dirinya sendiri
const mapStateToProps = (state, ownProps) => {
  // props user akan mengambil state.users dari Redux Store
  // kemudian mencari user.id yang sesuai dengan props dengan object userId
  return {
    user: state.users.find((user) => user.id === ownProps.userId),
  };
};

// menguhubungkan comp (berupa props) dengan state yang ada pada Redux
export default connect(mapStateToProps)(UserList);
