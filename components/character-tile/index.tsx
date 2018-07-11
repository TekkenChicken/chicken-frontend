import React from "react";
import styled from "react-emotion";
import { Metadata } from "models";

interface Props {
    character: Metadata;
}

const CharacterTile: React.SFC<Props> = ({ character }) => (
    <h1>{character.name}</h1>
);

export default CharacterTile;
