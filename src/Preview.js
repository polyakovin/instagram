import React from 'react';
import Name from './Name.js';
import Like from './Like.js';
import Time from './Time.js';

// import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Preview() {
  return (
    <div className="preview">
       {/*<Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>*/}
      <a><Name /></a>
      <img src="https://vokrug.tv/pic/person/1/9/4/8/1948bdc27265d19af825628eb1eeece4.jpeg" alt="foto" />
      <p>
	      <Like />
	      <Time />
      </p>
    </div>
  );
}

export default  Preview;