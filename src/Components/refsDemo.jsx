import React, { Component } from "react";

class RefDemo extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input ref={this.inputRef} />
      </div>
    );
  }
}

export default RefDemo;
