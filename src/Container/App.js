import React, { Component } from "react";
import Layout from "../Component/Layout/Layout.js";
import "./App.css";
import Users from "./Users/Users.js";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Users />
        </Layout>
      </div>
    );
  }
}

export default App;
