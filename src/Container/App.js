import React, { Component } from "react";
import Layout from "../Component/Layout/Layout.js";
import "./App.css";
import Users from "./Users/Users.js";
import Posts from "./Posts/Posts.js";

class App extends Component {
  state = {
    clickedUserId: null,
  };
  clickedUserHandler = (userId) => {
    this.setState({ clickedUserId: userId });
  };

  render() {
    //console.log(this.clickedUserId);
    return (
      <div>
        <Layout>
          <Users
            className=".users"
            clickedUser={(userId) => this.clickedUserHandler(userId)}
          />
          <Posts className=".posts" userId={this.state.clickedUserId} />
        </Layout>
      </div>
    );
  }
}

export default App;
