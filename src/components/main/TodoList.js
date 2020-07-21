import React, { Component } from 'react';
import './TodoList.css'
import { todoData } from './Main';

class TodoList extends Component {
  constructor() {
    super();

    this.state = {
      readOnly: true
    }
  }

  handleDoubleClick = (event) => {
    event.preventDefault();
    event.target.className = 'edit-todo editing';
    this.setState({ readOnly: false })
  }

  handleOnBlur = (event) => {
    event.preventDefault();
    event.target.className = 'edit-todo read-only';
    this.setState({ readOnly: true })
  }

  // On key change to update value
  handleOnChange = (event) => {
    this.setState({ editTodo: event.target.value });
    console.log(event.target.value);
  }

  handleOnDelete = (event) => {
    // event.preventDefault();
    event.target.parentElement.remove();
    todoData.length = todoData.length - 1;
    console.log(event.target.parentElement);
  }

  handleOnToggle = (event) => {
    let allCheck = document.querySelectorAll('.check');
    let all = document.querySelectorAll('.select-all');
    console.log(all, allCheck);
    if (event.target.checked === true) {
      // console.log('Checked', event.target)
    } else {
      // console.log('UnChecked', event.target)
    }
  }

  componentDidMount() {
    // Active URL
    const activeURL = document.querySelectorAll('.todo-footer a span');
    for (let i = 0; i < activeURL.length; i++) {
      activeURL[i].className = '';
    }
    if (window.location.pathname === '/') {
      activeURL[0].className = 'active';
    }
    if (window.location.pathname === '/active') {
      activeURL[1].className = 'active';
    }
    if (window.location.pathname === '/completed') {
      activeURL[2].className = 'active';
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