import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "mineral-ui/themes";
import App from "./src";

const Index: React.SFC = () => (
    <ThemeProvider>
        <App/>
    </ThemeProvider>
);

render(<Index/>, document.getElementById("app"));
