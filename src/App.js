import "./App.css";
import { HomePage } from "./components/homepage";
import React from "react";
import { MovieList } from "./components/MovieList";
import { MoviesBlocked } from "./components/MoviesBlocked";
import { MoviesLiked } from "./components/MoviesLiked";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/homepage" component={HomePage}>
            <HomePage />
          </Route>
          <Route path="/MovieList" component={MovieList}>
            <MovieList />
          </Route>
          <Route path="/MoviesBlocked" component={MoviesBlocked}>
            <MoviesBlocked />
          </Route>
          <Route path="/MoviesLiked" component={MoviesLiked}>
            <MoviesLiked />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
