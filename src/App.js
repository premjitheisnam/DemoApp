import React, { Component } from "react";
import "./App.css";

import Navigation from "./Component/Navigation";
import Layout from "./Layout/Layout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Layout />
        hi i am react developer
      </div>
    );
  }
}

export default App;
