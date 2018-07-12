import React from "react";
import { withMoveContext } from "providers";
import CharacterMoves from "../components/character-moves";
import { Location } from "@reach/router";

export default withMoveContext(() => (
    <Location>
        {({location: { pathname }}) => (
            <CharacterMoves label={pathname}/>
        )}
    </Location>
));
