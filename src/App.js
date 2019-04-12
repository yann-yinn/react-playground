import React, { Component } from "react";
import "./App.css";
import BookListPage from "./pages/BookListPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={HomePage} />
        <Route path="/books" exact component={BookListPage} />
      </Router>
    );
  }
}

export default App;
