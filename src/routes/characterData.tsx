import React from "react";
import { RouteComponentProps } from "@reach/router";

interface Props {
    name: string;
}

const CharacterData: React.SFC<RouteComponentProps<Props>> = ({ name }) => (
    <h1>character data: {name}</h1>
);

export default CharacterData;
