import React from 'react';
import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Preview from './Preview.js';

class App extends Component {
  render() { 
    let arr = [1,2,3,4,5,6];
    return (
      <div className="App">
        <h1>Instagram created by Andrei Remizov</h1>
        <header className="App-header">
        {
          arr.map(item=><Preview />)
        }
        </header>
        <button>
          Загрузить еще
        </button>
      </div>
    );
  }
}

export default App;

