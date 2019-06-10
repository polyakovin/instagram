import React, {Component} from 'react';
import Preview from './Preview.js';

class Home extends Component {
  render() { 
    let arr = [1,2,3,4,5,6];
    return (
      <div className="home">
        <header className="App-header">
        {
          arr.map((item , i)=><Preview key={Date.now() + "_" + i} />)
        }
        </header>
        <button>
          Загрузить еще
        </button>
    </div>
    );
  }
}

export default Home;