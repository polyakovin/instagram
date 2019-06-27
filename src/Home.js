import React, {Component} from 'react';
import Preview from './Preview.js';
import photos from './photos.json';

class Home extends Component {
  state={
    photos 
  }

  addLike(i){
    const { photos } = this.state;
    photos[i].likesAmount++;
    photos[i].isLiked = true;
    this.setState({ photos },
      () => localStorage.setItem('photo', JSON.stringify(this.state)));
  }

  removeLike(i){
    const { photos } = this.state;
    photos[i].likesAmount--;
    photos[i].isLiked = false;
    this.setState({ photos },
      () => localStorage.setItem('photo', JSON.stringify(this.state)));
  }

  pressLike(i){
    if(this.state.photos[i].isLiked){
      this.removeLike(i);
    } else {
      this.addLike(i);
    }
  }

  render() { 
    return (
      <div className="home">
        <header className="App-header">
         {this.state.photos.map((photo, i)=><Preview addLike={this.pressLike.bind(this , i )} photo={photo} key={Date.now() + "_" + i} />)}
        </header>
        <button>
          Загрузить еще
        </button>
    </div>
    );
  }
}

export default Home;