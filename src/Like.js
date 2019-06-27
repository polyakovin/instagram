import React, {Component} from 'react';

class  Like extends Component {

	render(){
	  return (
	    <div className="like">
	      <button onClick={this.props.addLike}>&lt;3</button>
	      <span>{this.props.likesAmount}</span>
	    </div>
	  );
	}
}

export default Like;