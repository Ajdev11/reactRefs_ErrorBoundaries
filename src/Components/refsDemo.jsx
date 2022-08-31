import React, { Component } from "react";

class RefDemo extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    //this.inputRef.current.focus();
    console.log(this.inputRef)
  }
handleClick=()=>{
    this.inputRef.current.focus();
}
  render() {
    return (
      <div>
        <input ref={this.inputRef} />
        <button onClick={this.handleClick}>focus Input</button>
      </div>
    );
  }
}

export default RefDemo;
