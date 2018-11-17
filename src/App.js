import React, { Component } from 'react';
import TodoList from './component/TodoList/TodoList';
import InputField from './component/InputField/InputField';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'install create-react-app'},
      {id: 2, content: 'add state to our app'},
      {id: 3, content: 'Add a title to our page'}
    ]
  }

  deleteHandler = id => {
    const todos = this.state.todos.filter(todo => {
      return (
        id !== todo.id
      );
    });
    this.setState({todos: todos});
  }

  addTodo = newTodo => {
    newTodo.id = Math.random();
    const todos = [...this.state.todos, newTodo];
    this.setState({todos: todos});
  }

  render() {
    return (
      <div>
        <h1>A Simple Todo App</h1>
        <InputField addNewTodo={this.addTodo} />
        <TodoList todos={this.state.todos} delete={this.deleteHandler} />
      </div>
    );
  }
}

export default App;
