import React, { Component } from 'react';
import './Main.css'

const ENTER_KEY = 13; // Enter Key Code
let todoData = [];

class Main extends Component {
  constructor(props) {
    super(props);

    // Binding functions
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);

    // States
    this.state = {
      newTodo: ''
    }
  }

  // On enter key press
  handleKeyDown(event) {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    event.preventDefault();

    var val = this.state.newTodo.trim();

    if (val) {
      this.setState({ newTodo: '' });
      let data = todoData.push(this.state);
      localStorage.setItem('todo', data);
      console.log(this.state);
    }
  }

  // On key change to update value
  handleChange(event) {
    this.setState({ newTodo: event.target.value });
  }

  render() {
    return (
      <main>
        <div className="wrapper">
          <input autoFocus
            className="add-todo"
            placeholder="What needs to be done?"
            value={this.state.newTodo}
            onKeyDown={this.handleKeyDown}
            onChange={this.handleChange}
          />
          <div className="todo-list"></div>
        </div>
      </main>
    );
  }
}

// const TodoList = (props) => {
//   return (
//     <div><p>Todo here...</p></div>
//   );
// }

export default Main;