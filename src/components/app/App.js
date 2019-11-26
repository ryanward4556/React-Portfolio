import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import "animate.css/animate.min.css";
import Landing from "../Landing";
import About from "../About";
import Portfolio from "../Portfolio";

const App = () => {
  return (
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
  );
}

export default App;
