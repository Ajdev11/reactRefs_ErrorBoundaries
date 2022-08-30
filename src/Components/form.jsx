import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      comment: "",
      Topics: "React",
    };
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleComment = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };
  handleTopics = (event) => {
    this.setState({
      Topics: event.target.value,
    });
  };
handleSubmit=(event)=>{
    alert(`${this.state.username} ${this.state.comment} ${this.state.Topics}`)
    event.preventDefault();
}
  render() {
    const {username, comment, Topics} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            value={username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <div>
          <label>Comment</label>
          <textarea value={comment} onChange={this.handleComment} />
        </div>
        <div>
          <label>Topics</label>
          <select value={Topics} onChange={this.handleTopics}>
            <option>React</option>
            <option>Angular</option>
            <option>Javascript</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default Form;
