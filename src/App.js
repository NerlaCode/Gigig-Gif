import "./styles.css";
// import Gif from "./component/gif/Gif";
// import data from "./data";
// import Search from "./component/search/index";
// import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home";
import Trending from "./component/trending/Trending";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/trending">
          <Trending />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
