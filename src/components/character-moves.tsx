import React from "react";
import Text from "mineral-ui/Text";
import { usingMoveContext } from "providers";
import { compose } from "recompose";

export default usingMoveContext((props) => {
    console.log(props);
    return (<Text>{props.label}</Text>);
});
