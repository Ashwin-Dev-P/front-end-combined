import React, { Component } from "react";

export default class MyButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { text, onClick, className } = this.props;
    return (
      <>
        <button onClick={onClick} className={className}>
          {text}
        </button>
      </>
    );
  }
}
