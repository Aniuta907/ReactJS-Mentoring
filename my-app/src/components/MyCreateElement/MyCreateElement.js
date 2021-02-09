import React from "react";

export const MyCreateElement = ({ name }) => {
  return React.createElement('h1', null, `Hello, ${name}!`);
}