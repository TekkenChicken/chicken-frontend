import React from "react";
import Text from "mineral-ui/Text";
import Characters from "./routes/characters";
import CharacterData from "./routes/characterData";
import { Router } from "@reach/router";

export default () => (
    <>
        <Text element="h1">T7C Frame Data Administration</Text>
        <Router>
            <Characters path="/"/>
            <CharacterData path="/:name"/>
        </Router>
    </>
);
