import React from 'react';

class AddComments extends React.Component {

	state = {
		text: ''
	}

	changeText(event){
		this.setState({text:event.target.value})
	}

	render(){
		  return (
		    <div className="addComment">
		      <input type="text" value={this.state.text}  onChange={this.changeText.bind(this)}/> 
		      <button onClick={()=>this.props.addComment(this.state.text)}>добавить комментарий</button>
		    </div>
		  );
	}
}

export default AddComments;
