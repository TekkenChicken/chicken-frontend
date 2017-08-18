import React, { Component } from "react";

export default class CharacterDetailRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: false
        };

        this.updateRow = this.updateRow.bind(this);
        this.cancelEditing = this.cancelEditing.bind(this);
    }

    updateRow(e) {
        console.log('clicked', e.currentTarget);
        this.setState({editable: true});
    }

    cancelEditing() {
        this.setState({editable: false});
    }

    render() {
        if(this.state.editable) {
            return (
                <tr>
                    <td>
                        <div className="control">
                            <input className="input" defaultValue={this.props.data.name}/>
                        </div>
                    </td>
                    <td>
                        <div className="control">
                            <input className="input" defaultValue={this.props.data.notation}/>
                        </div>
                    </td>
                    <td>
                        <div className="control">
                            <input className="input" defaultValue={this.props.data.hit_level}/>
                        </div>
                    </td>
                    <td>
                        <div className="control">
                            <input className="input" defaultValue={this.props.data.damage}/>
                        </div>
                    </td>
                    <td>
                        <div className="control">
                            <input className="input" defaultValue={this.props.data.speed}/>
                        </div>
                    </td>
                    <td>
                        <div className="control">
                            <input className="input" defaultValue={this.props.data.on_block}/>
                        </div>
                    </td>
                    <td>
                        <div className="control">
                            <input className="input" defaultValue={this.props.data.on_hit}/>
                        </div>
                    </td>
                    <td>
                        <div className="control">
                            <input className="input" defaultValue={this.props.data.on_ch}/>
                        </div>
                    </td>
                    <td>
                        <div className="control">
                            <input className="input" defaultValue={this.props.data.properties}/>
                        </div>
                    </td>
                    <td>
                        <div className="control">
                            <input className="input" defaultValue={this.props.data.notes === "null" ? "" : this.props.data.notes}/>
                        </div>
                    </td>
                    <td>
                        <div className='control'>
                            <h4 className='button is-dark' onClick={this.cancelEditing}>Cancel</h4>
                        </div>
                    </td>
                </tr>
            );
        } else {
            return (
                <tr onClick={(e) => this.updateRow(e)}>
                    <td>{this.props.data.name}</td>
                    <td>{this.props.data.notation}</td>
                    <td>{this.props.data.hit_level}</td>
                    <td>{this.props.data.damage}</td>
                    <td>{this.props.data.speed}</td>
                    <td>{this.props.data.on_block}</td>
                    <td>{this.props.data.on_hit}</td>
                    <td>{this.props.data.on_ch}</td>
                    <td>{this.props.data.properties}</td>
                    <td>{this.props.data.notes === "null" ? "" : this.props.data.notes}</td>
                </tr>
            );
        }
    }
}
