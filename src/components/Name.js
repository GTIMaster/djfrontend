import React, { Component } from "react";

export default class componentName extends Component {
  constructor() {
    super();
    this.state = {
      name: "Rone Army",
    };
  }
  clickme = () => {
    this.setState({
      // name: "change name,",
      // sername: "change sername",
      name: this.state.name === "Rone Army" ? "John Doe" : "Rone Army",
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.clickme}>Change Text</button>
      </div>
    );
  }
}
