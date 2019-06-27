import React , {Component} from 'react';
import Like from './Like.js';
import Time from './Time.js';

import { Link } from "react-router-dom";
import {withRouter} from "react-router-dom";


class Preview extends Component {

  render(){
    const {url, name, description:descr , likesAmount} = this.props.photo;
  return (
    <div className="preview">
      <Link to={"/photo/"+ this.props.photo.name}><h2>{name}</h2></Link> 
      <img src={url} alt="foto" />
      <div>
	      <Like likesAmount={likesAmount} addLike={this.props.addLike} />
	      <Time />
      </div>
      <p>{descr}</p>
    </div>
   );  
  }
}

export default withRouter(Preview);