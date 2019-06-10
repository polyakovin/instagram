import React from 'react';
import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Preview from './Preview.js';
import Home from './Home.js';

import { BrowserRouter as Switch, Route } from "react-router-dom";

class App extends Component {
  render() { 
    let arr = [1,2,3,4,5,6];
    return (
      <div className="App">
        <h1>Instagram created by Andrei Remizov</h1>
         <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/preview" component={Preview} />
         </Switch>
      </div>
    );
  }
}

export default App;

