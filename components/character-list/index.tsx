import React from "react";
import { Character } from "models";
import Text from "mineral-ui/Text";

interface Props {
    characters: Character[];
}

const CharacterList: React.SFC<Props> = ({ characters }) => (
    <Text element="h2">Character list</Text>
);

export default CharacterList;
