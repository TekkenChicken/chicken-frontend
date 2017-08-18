import React, { Component } from "react";

export default class CharacterDetailRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: false
        };

        this.updateRow = this.updateRow.bind(this);
    }

    updateRow(e) {
        console.log('clicked', e.currentTarget);
    }

    render() {
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
