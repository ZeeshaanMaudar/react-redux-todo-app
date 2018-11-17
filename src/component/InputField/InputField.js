import React, { Component } from 'react';

class InputField extends Component {
  state = {
    content: ''
  }

  changeValueHandler = event => {
    this.setState({content: event.target.value});
  }

  submitValueHandler = event => {
    event.preventDefault();
    this.props.addNewTodo(this.state);
    this.setState({content: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitValueHandler}>
          <input
            type='text'
            placeholder='Insert new todo here'
            value={this.state.content}
            onChange={this.changeValueHandler} />
        </form>
      </div>
    );
  }
}

export default InputField;
