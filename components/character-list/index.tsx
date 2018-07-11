import React from "react";
import Text from "mineral-ui/Text";
import CharacterTile from "../character-tile";
import { Metadata, Map } from "models";

interface Props {
    data: Map<Metadata>;
}

const CharacterList: React.SFC<Props> = ({ data }) => (
    <>
        <Text element="h2">Character list</Text>
        { renderCharacters(data) }
    </>
);

const renderCharacters = (data: Map<Metadata>) => {
    const charData = [];
    // tslint:disable-next-line:forin
    for (const character in data) {
        if (data[character].hasOwnProperty("name")) {
            charData.push(data[character]);
        }
    }

    return charData.map( (character, index) => <CharacterTile key={index} character={character}/>);
};

export default CharacterList;
