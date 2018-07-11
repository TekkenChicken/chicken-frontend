import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "mineral-ui/themes";
import Text from "mineral-ui/Text";

const Index: React.SFC = () => (
    <ThemeProvider>
        <Text element="h1">T7C Frame Data Administration</Text>
    </ThemeProvider>
);

render(<Index/>, document.getElementById("app"));
