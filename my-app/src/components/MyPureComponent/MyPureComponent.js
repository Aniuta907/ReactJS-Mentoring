import React, { PureComponent } from "react";

export class MyPureComponent extends PureComponent {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}