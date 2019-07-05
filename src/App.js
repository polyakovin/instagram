import React from 'react';
import {Component} from 'react';
import { Switch, Route } from "react-router-dom";
// import Unsplash from 'unsplash-js';

import Photo from './Photo.js';
import Home from './Home.js';
import NotFound from './NotFound.js';
import './App.css';



class App extends Component {

//   componentDidMount(){

//     const unsplash = new Unsplash({
//       applicationId: "f2b8233d66bef639b46c257b9457fa0fd89db7337c6aa85f3c1ba842dc7ab133",
//       secret: "247cec008e8507bb7e6eaf8482388c22d80a1a6568a1db0f1c93ffa2a63fef02",
//       callbackUrl: "http://www.example.com/auth"
//     });

//     const authenticationUrl = unsplash.auth.getAuthenticationUrl([
//       "public",
//       "write_likes"
//     ]);

//     location.assign(authenticationUrl);

// }
 
  render() { 
    return (
      <div className="App">
        <h1>Instagram created by Andrei Remizov</h1>
         <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/photo/:id" component={Photo} />
              <Route path="**" component={NotFound} />
         </Switch>
      </div>
    );
  }
}

export default App;

