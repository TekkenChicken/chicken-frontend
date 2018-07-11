import React from "react";
import { Character } from "models";
import Text from "mineral-ui/Text";
import { usingCharacterContext } from "providers";

export default usingCharacterContext(({
    data,
}) => {
    return (
        <Text element="h2">Character list</Text>
    );
});
