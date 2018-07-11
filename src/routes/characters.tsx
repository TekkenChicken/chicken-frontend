import React from "react";
import { withCharacterContext } from "providers";
import CharacterList from "../components/character-list";

export default withCharacterContext(() => (
    <CharacterList/>
));
