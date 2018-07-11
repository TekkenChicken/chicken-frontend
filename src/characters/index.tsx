import React from "react";
import { withCharacterContext } from "providers";
import { CharacterList } from "components";

export default withCharacterContext(() => (
    <CharacterList/>
));
