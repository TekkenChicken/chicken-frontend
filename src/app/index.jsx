import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {render} from 'react-dom';
import axios from "axios";

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
    let fetchedFrameData, fetchedMetaData;
    const axiosConfig = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    };

    fetchedFrameData = axios.get("http://api.tekkenchicken.com/api/framedata", axiosConfig)
      .then( (response) => console.log(response.data));

    fetchedMetaData = axios.get("http://api.tekkenchicken.com/api/metadata", axiosConfig)
      .then( (response) => console.log(response.data));

    this.setState({frameData: fetchedFrameData});
  }

  render() {
    console.log(this.state);
    return (
      <Router>
        <section className='main section'>
          <h1 className='title'>Tekken Chicken Administration Panel</h1>
          <Route exact path='/' component={Home}/>
          <Route exact path='/:character' component={CharacterDetail}/>
        </section>
      </Router>
    );
  }
}

render(<App/>, document.getElementById('app'));
