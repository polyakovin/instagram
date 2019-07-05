import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increment , zero , decrement} from './actions';


class  LikeComponent extends Component {

	render(){
	  return (
	    <div className="like">
	      <button onClick={this.props.addLike}></button>
	      <span>{this.props.likesAmount}</span>
	    </div>
	  );
	}
}

const mapStateToProps = state => ({
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  increment(value) {dispatch(increment())},
  zero(value) {dispatch(zero())},
  decrement(value) {dispatch(decrement())},
});

const Like = connect(mapStateToProps, mapDispatchToProps)(LikeComponent);

export default Like;