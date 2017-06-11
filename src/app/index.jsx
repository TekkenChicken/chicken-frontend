import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {render} from 'react-dom';
import 'whatwg-fetch';

//import main sass file here
import "./_main.scss";

//import components here
import Home from './components/Home.jsx';
import CharacterDetail from './components/CharacterDetail.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // fetch('http://api.tekkenchicken.com/api/metadata/')
    //   .then( (response) => {
    //     console.log(response);
    //   });
  }

  render() {
    return (
      <Router>
        <section className='main section'>
          <h1 className='title'>Tekken Chicken Administration Panel</h1>
          <Route exact path='/' component={Home}/>
          <Route path='/:character' component={CharacterDetail}/>
        </section>
      </Router>
    );
  }
}

render(<App/>, document.getElementById('app'));
