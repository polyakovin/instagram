import React, {Component} from 'react';

class  Comment extends Component {

	render(){
		console.log(this.props.comment);
	return (
    <div className="Comment">
      <strong>{this.props.comment.author + ' : '}</strong>
      <span>{this.props.comment.text}</span>
      <button onClick={this.props.removeComment} >Удалить</button>
    </div>
  );
}
}

export default Comment;