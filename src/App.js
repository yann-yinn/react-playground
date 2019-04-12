import React, { Component } from "react";
import "./App.css";
import FilmListPage from "./pages/FilmListPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/films" exact component={FilmListPage} />
      </Router>
    );
  }
}

export default App;
