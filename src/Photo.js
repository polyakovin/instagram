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
        author: 'name 1',
        text : 'text',
      },
       {
        id: new Date()+Math.random(),
        date: new Date(),
        author: 'name 2',
        text : 'text',
      },
       {
        id: new Date()+Math.random(),
        date: new Date(),
        author: 'name 3',
        text : 'text',
      },
    ]
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

   const comments = this.state.comments.map((item , i)=>{
    return <Comment key= {Date.now()+'_'+i} comment = {item} removeComment={this.removeComment.bind(this, item.id)} />
   });
   
  return (
    <div className="photo" >
      <h2 className="photoName">{name}</h2>
      <Link to="/"><Back /></Link>
      <div className="photoPhoto">
        <img src={url} alt={describtion} />
        <Like isLiked={isLiked} addLike={()=>{this.addLike.bind(this)}} likesAmount={likesAmount} />
        <Time />
      </div>
      <div className="photoComents"> 
         <p>
          {describtion}
        </p> 
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