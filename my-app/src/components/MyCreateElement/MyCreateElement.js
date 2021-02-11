import React from "react";

export const MyCreateElement = (props) => {
  return React.createElement('h1', null, `Hello, ${props.children}!`);
}