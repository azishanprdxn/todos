import React, { Component } from 'react';
import './TodoList.css'
import { todoData } from './Main';

export let length;

class TodoList extends Component {
  constructor() {
    super();
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleOnBlur = this.handleOnBlur.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnDelete = this.handleOnDelete.bind(this);
    this.handleOnToggle = this.handleOnToggle.bind(this);
    this.state = {
      readOnly: true,
      editTodo: '',
      completed: false
    }
  }

  handleDoubleClick(event) {
    event.preventDefault();
    event.target.className = 'edit-todo editing';
    this.setState({ readOnly: false })
  }

  handleOnBlur(event) {
    event.preventDefault();
    event.target.className = 'edit-todo read-only';
    this.setState({ readOnly: true })
  }

  // On key change to update value
  handleOnChange(event) {
    this.setState({ editTodo: event.target.value });
    console.log(event.target.value);
  }

  handleOnDelete(event) {
    event.preventDefault();
    event.target.parentElement.remove();
    todoData.length = todoData.length - 1;
    console.log(todoData.length);
  }

  handleOnToggle(event) {
    let allCheck = document.querySelectorAll('.check');
    for (let i = 0; i < allCheck.length; i++) {
      if (allCheck[i].checked === true) {
        // console.log(allCheck[i].checked);
      }
    }
    if (event.target.checked === true) {
      this.setState({ completed: true });
      // this.props.completed = true;
      console.log(this.state.completed, this.props.completed);
    } else {
      this.setState({ completed: false });
      // this.props.completed = this.state.completed;
      console.log(this.state.completed, this.props.completed);
    }
  }

  render() {
    return (
      <div className="todo-list">
        <input type="checkbox" className="check" onClick={this.handleOnToggle} />
        <input readOnly={this.state.readOnly}
          className="edit-todo"
          value={this.props.data}
          onDoubleClick={this.handleDoubleClick}
          onBlur={this.handleOnBlur}
          onChange={this.handleOnChange}
        />
        <span className="fa fa-times delete-btn" aria-hidden="true" title="Delete" onClick={this.handleOnDelete}></span>
      </div>
    )
  }
}

export default TodoList;