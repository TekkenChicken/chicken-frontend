import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';

import stubMetaData from '../fixtures/metadata';

export default class Home extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className='title'>Characters</h1>
        <div className='columns is-multiline'>
          {this.renderCharacters()}
        </div>
      </div>
    );
  }

  renderCharacters() {
    let characters = [];
    for (let character in stubMetaData) {
      characters.push(
        <Link to={"/" + stubMetaData[character].label}>
          <div className='column character'>
            <h2 className='title is-4'>{stubMetaData[character].name}</h2>
            <h4 className='subtitle'>Last Updated: {stubMetaData[character].last_updated}</h4>
          </div>
        </Link>
      );
    }
    return characters;
  }
}
