import React, {Component} from 'react';
import {render} from 'react-dom';

//import main sass file here
import "./_main.scss";

//import components here

class App extends Component {
  render() {
    return (
      <div className='main'>
        <h1>Hello World</h1>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
