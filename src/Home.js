import React, {Component} from 'react';
import Preview from './Preview.js';
import photos from './photos.json';
import {connect} from 'react-redux';
import {addLike} from './actions';


class HomeComponent extends Component {

  addLike(i){
    console.log(this.props.photos[i]);
    this.props.addLike(i);
    // const { photos } = this.state;
    // photos[i].likesAmount++;
    // photos[i].isLiked = true;
    // this.setState({ photos },
    //   () => localStorage.setItem('photo', JSON.stringify(this.state)));
  }

  removeLike(i){
     console.log(this.props.photos[i]);
    // const { photos } = this.state;
    // photos[i].likesAmount--;
    // photos[i].isLiked = false;
    // this.setState({ photos },
    //   () => localStorage.setItem('photo', JSON.stringify(this.state)));
  }

  pressLike(i){
    if(this.props.photos[i].isLiked){
      this.removeLike(i);
    } else {
      this.addLike(i);
    }
  }

  render() { 
    console.log(this.props);
    return (
      <div className="home">
        <header className="App-header">
         {this.props.photos.map((photo, i)=><Preview addLike={this.pressLike.bind(this , i )} photo={photo} key={Date.now() + "_" + i} />)}
        </header>
        <button>
          Загрузить еще
        </button>
    </div>
    );
  }
}


const mapStateToProps = state => ({
  photos: state.photos
});

const mapDispatchToProps = dispatch => ({
  addLike(i) {dispatch(addLike(i))},
});

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

export default Home;