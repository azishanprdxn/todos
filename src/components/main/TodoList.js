import React, { Component } from 'react';
import './TodoList.css'
import { todoData } from './Main';

export let length;

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      readOnly: true,
      completed: this.props.completed
    }
  }

  handleDoubleClick = (event) => {
    event.preventDefault();
    event.target.className = 'edit-todo editing';
    this.setState({ readOnly: false });
  }

  handleOnBlur = (event) => {
    event.preventDefault();
    event.target.className = 'edit-todo read-only';
    this.setState({ readOnly: true });
  }

  // On key change to update value
  handleOnChange = (event) => {
    this.setState({ editTodo: event.target.value });
    console.log(event.target.value);
  }

  handleOnDelete = (event, index) => {
    event.preventDefault();
    let newTodoData = todoData.filter((element, i) => i !== index);
    event.target.parentElement.remove();
    let storage = JSON.parse(localStorage.getItem('key'));
    localStorage.setItem('key', JSON.stringify(newTodoData));
    todoData.pop(this.todoData);
    console.log(newTodoData, storage);
    // length = todoData.length;
    // length = length - 1;
  }

  handleOnToggle = (event) => {
    // let allCheck = document.querySelectorAll('.check');
    // let all = document.querySelectorAll('.select-all');
    if (event.target.checked === true) {
      console.log('Checked', event.target)
      this.setState({ completed: true });;
      console.log(event.target.nextSibling, this.props.completed);
    } else {
      console.log('UnChecked', event.target);
      this.setState({ completed: false });;
    }
  }

  componentDidMount() {
    // Active URL
    const activeURL = document.querySelectorAll('.todo-footer a span');
    if (window.location.pathname === '/' || window.location.pathname === '/todos') {
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