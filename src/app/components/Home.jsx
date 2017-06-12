import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';

import stubMetaData from '../fixtures/metadata.json';

export default class Home extends Component {
  render() {
    return (
      <div className='container is-fluid'>
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
      if(character !== 'last_updated') {
        characters.push(
          <Link to={"/" + stubMetaData[character].label} key={characters.length}>
            <div className='column character'>
              <h2 className='title is-4'>{stubMetaData[character].name}</h2>
              <h4 className='subtitle is-6'>Last Updated: {stubMetaData[character].last_updated}</h4>
            </div>
          </Link>
        );
      }
    }
    return characters;
  }
}
