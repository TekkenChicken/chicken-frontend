import React, {Component} from 'react';

import stubFrameData from '../fixtures/framedata.json';

export default class CharacterDetail extends Component {
  componentWillMount() {
    this.state = {
      character: this.props.match.params.character === 'home' ? '' : this.props.match.params.character
    }
  }

  render() {
    return (
      <div className='character-detail container is-fluid'>
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
        <tr key={index}>
          <td>{data.name}</td>
          <td>{data.notation}</td>
          <td>{data.hit_level}</td>
          <td>{data.damage}</td>
          <td>{data.speed}</td>
          <td>{data.on_block}</td>
          <td>{data.on_hit}</td>
          <td>{data.on_ch}</td>
          <td>{data.properties}</td>
          <td>{data.notes}</td>
        </tr>
      );
    });
  }
}
