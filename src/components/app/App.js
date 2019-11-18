import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Landing from "../Landing";


function App() {
  return (
    <div className="App">
      <header className="header">
        <Switch>
          <Route exact path="/" component={Landing} />
          {/* <Route exact path="/about" component={About} />
          <Route exact path="/porfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} /> */}
        </Switch>
      </header>
    </div>
  );
}

export default App;
