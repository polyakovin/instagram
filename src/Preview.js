import React from 'react';
import Name from './Name.js';
import Like from './Like.js';
import Time from './Time.js';

import { BrowserRouter as Link } from "react-router-dom";


function Preview() {
  return (
    <div className="preview">
      <Link to="/preview">Andrei</Link>
      <img src="https://vokrug.tv/pic/person/1/9/4/8/1948bdc27265d19af825628eb1eeece4.jpeg" alt="foto" />
      <div>
	      <Like />
	      <Time />
        <Name />
      </div>
    </div>
  );
}

export default  Preview;