import React, { Component } from "react";
import "./App.css";
import FilmList from "./components/FetchingData";

class App extends Component {
  render() {
    return (
      <div>
        <FilmList />
      </div>
    );
  }
}

export default App;
