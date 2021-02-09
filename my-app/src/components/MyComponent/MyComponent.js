import React, { Component } from "react";

export class MyComponent extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}