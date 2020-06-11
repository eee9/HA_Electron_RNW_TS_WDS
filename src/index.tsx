import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./Hello";

export const isELEC = (navigator.userAgent.toLowerCase().search('electron') >=0);

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React Native Web" />,
    document.getElementById("app")
);
