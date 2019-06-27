import React, {Component} from 'react';

class  Comment extends Component {

	render(){
		
	return (
    <div className="Comment">
      <strong>{this.props.comment.author}</strong>
      <p>{this.props.comment.text}</p>
      <button onClick={this.removeComment.bind(null, this.props.comment.id)} >Удалить комментарий</button>
    </div>
  );
}
}

export default Comment;