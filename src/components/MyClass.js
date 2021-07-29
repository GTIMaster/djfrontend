import React, { Component } from "react";

export default class MyClass extends Component {
  render() {
    return (
      <div>
        <h1>class component textInComponent {this.props.email}</h1>
        <button className="btn btn-primary" onClick={this.props.myclick}>
          Clickclass
        </button>
      </div>
    );
  }
}

