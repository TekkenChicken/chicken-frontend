import React from "react";
import { Metadata } from "models";
import Card, { CardTitle, CardBlock } from "mineral-ui/Card";
import { Link } from "@reach/router";

interface Props {
    character: Metadata;
}

const CharacterTile: React.SFC<Props> = ({ character }) => (
    <Link to={`/${character.label}`}>
        <Card>
            <CardTitle>{character.name}</CardTitle>
            <CardBlock>{character.last_updated}</CardBlock>
        </Card>
    </Link>
);

export default CharacterTile;
