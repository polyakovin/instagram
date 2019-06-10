import React from 'react';
import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Preview from './Preview.js';
import Home from './Home.js';
import NotFound from './NotFound.js';

import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() { 
    return (
      <div className="App">
        <h1>Instagram created by Andrei Remizov</h1>
         <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/preview" component={Preview} />
              <Route path="**" component={NotFound} />
         </Switch>
      </div>
    );
  }
}

export default App;

