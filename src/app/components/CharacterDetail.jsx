import React, {Component} from 'react';
import {Link} from "react-router-dom";

import stubFrameData from '../fixtures/framedata.json';
import CharacterDetailRow from "./CharacterDetailRow";

export default class CharacterDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.state = {
      character: this.props.match.params.character === 'home' ? '' : this.props.match.params.character
    }
  }

  updateRow(e) {
    console.log('clicked', e);
  }

  render() {
    return(
      <div className='character-detail container is-fluid'>
        <Link to={"/"}>
          <h2 className="subtitle return button is-medium">{"Return Home"}</h2>
        </Link>
        <h1 className='title'>Character Detail - {this.props.match.params.character.toUpperCase()}</h1>
        <table className='table'>
          {this.renderTableTitles()}
          <tbody>
            {this.renderFrameData(this.state.character)}
          </tbody>
        </table>
      </div>
    );
  }

  renderTableTitles() {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Notation</th>
          <th>Hit Level</th>
          <th><abbr title='Damage'>Dmg</abbr></th>
          <th><abbr title='Speed'>Spd</abbr></th>
          <th>On Block</th>
          <th>On Hit</th>
          <th><abbr title='On Counter Hit'>On CH</abbr></th>
          <th>Properties</th>
          <th>Notes</th>
        </tr>
      </thead>
    );
  }

  renderFrameData(char) {
    let selectedChar = stubFrameData[char];
    return selectedChar.data.map(function(data, index) {
      return (
        <CharacterDetailRow data={data} key={index}/>
      );
    });
  }
}
