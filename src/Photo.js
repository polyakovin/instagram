import React , {Component} from 'react';
import Like from './Like.js';
import Time from './Time.js';
import Back from './Back.js';
import AddComments from './AddComments.js';
import Comment from './Comment.js';

import { Link } from "react-router-dom";
import photos from './photos.json';


class Photo extends Component {

  state = {
    comments: [
      {
        id: new Date()+Math.random(),
        date: new Date(),
        author: 'name',
        text : 'text',
      },
       {
        id: new Date()+Math.random(),
        date: new Date(),
        author: 'name',
        text : 'text',
      },
       {
        id: new Date()+Math.random(),
        date: new Date(),
        author: 'name',
        text : 'text',
      },
    ]
    // photo:null
  };
  
  addComment(text){
    this.setState({
      comments:[ 
        ...this.state.comments,
        {
          id: new Date()+Math.random(),
          date: new Date(),
          author: 'Andrei',
          text
        }
     ]
    },() => localStorage.setItem('state', JSON.stringify(this.state)))
   }

   removeComment(id){
    this.setState({
      comments: this.state.comments.filter(com => com.id !== id)
    }, () => localStorage.setItem('state', JSON.stringify(this.state)))
  }


    componentDidMount() {
    if (localStorage.getItem('state')) {
      this.setState({ ...JSON.parse(localStorage.getItem('state')) })
    }
   
  }

  render(){
    const id = this.props.match.params.id;
    const photo = photos.find((photo)=>photo.name===id);
    const {name,url,describtion,likesAmount,isLiked} = photo;

   const comments = this.state.comments.map(function(item , i){
    return <Comment key= {Date.now()+'_'+i} comment = {item} />
   });
   
  return (
    <div className="photo" >
      {name}
      <Link to="/"><Back /></Link>
      <img src={url} alt={describtion} />
      <p>
        {describtion}
      </p>
      <div>
	      <Like isLiked={isLiked} addLike={()=>{this.addLike.bind(this)}} likesAmount={likesAmount} />
	      <Time />
        {
          comments
        }
        <AddComments addComment={this.addComment.bind(this)} />
      </div>
    </div>
   );  
  }
}

export default Photo;