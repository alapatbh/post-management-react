import React, { Component } from "react";
import Axios from "axios";
import User from "../../Component/User/User";

class Users extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      this.setState({
        users: Array.from(new Set(response.data.map((post) => post.userId))),
      });
    });
  }

  render() {
    console.log(this.state.users);
    const users = (
      <div>
        {this.state.users.map((int, index) => {
          return <User key={index} userId={int} />;
        })}
      </div>
    );
    return <div>{users}</div>;
  }
}

export default Users;
