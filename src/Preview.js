import React , {Component} from 'react';
import Name from './Name.js';
import Like from './Like.js';
import Time from './Time.js';

import { Link } from "react-router-dom";


class Preview extends Component {
  liked(){
    console.log("1");
  }
  render(){

  return (
    <div className="preview">
      <Link to="/preview"><Name /></Link>
      <img src="https://vokrug.tv/pic/person/1/9/4/8/1948bdc27265d19af825628eb1eeece4.jpeg" alt="foto" />
      <div>
	      <Like onClick={()=>{this.liked()}} />
	      <Time />
      </div>
    </div>
   );  
  }
}

export default Preview;