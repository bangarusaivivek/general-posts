import React from "react";

export type CustomizedFunctionComponent<T> = React.FunctionComponent<T>;

const ScreenWidth = window.innerWidth;
const ScreenHeight = window.innerHeight;

export { ScreenWidth, ScreenHeight };
