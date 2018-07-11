import React from "react";
import { usingCharacterContext } from "providers";
import Text from "mineral-ui/Text";
import { CharacterList } from "components";

export default usingCharacterContext(({
    data,
}) => (
    <CharacterList data={data}/>
));
