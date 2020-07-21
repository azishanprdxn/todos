import React, { Component } from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import './Main.css';
import TodoList from './TodoList';

const ENTER_KEY = 13; // Enter Key Code
export let todoData = [];

class Main extends Component {
  constructor(props) {
    super(props);
    // States
    this.state = {
      id: 0,
      newTodo: '',
      completed: false
    }
  }

  componentDidMount() {
    if (localStorage.getItem('key')) {
      let storage = JSON.parse(localStorage.getItem('key'));
      for (let i = 0; i < storage.length; i++) {
        todoData.push(storage[i]);
      }
    }
    console.log(todoData);
  }

  // On enter key press
  handleKeyDown = (event) => {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }
    event.preventDefault();
    let val = this.state.newTodo.trim();
    if (val) {
      this.setState({ id: this.state.id + 1, newTodo: '' });
      todoData.push(this.state);
      localStorage.setItem('key', JSON.stringify(todoData));
    }
  }

  // On key change to update value
  handleChange = (event) => {
    this.setState({ newTodo: event.target.value });
  }

  handleOnCheck = (event) => {
    let allCheck = document.querySelectorAll('.check');
    if (event.target.checked === true) {
      for (let i = 0; i < allCheck.length; i++) {
        allCheck[i].checked = true;
      }
    } else {
      for (let i = 0; i < allCheck.length; i++) {
        allCheck[i].checked = false;
      }
    }
  }

  handleLinkClick = (event) => {
    const activeURL = document.querySelectorAll('.todo-footer a span');
    for (let i = 0; i < activeURL.length; i++) {
      activeURL[i].className = '';
    }
    event.target.className = 'active';
  }

  render() {
    return (
      <main>
        <div className="wrapper">
          <div className="todos">
            <input type="checkbox" className="select-all" onClick={this.handleOnCheck} />
            <input autoFocus
              className="add-todo"
              placeholder="What needs to be done?"
              value={this.state.newTodo}
              onKeyDown={this.handleKeyDown}
              onChange={this.handleChange}
            />
            {todoData.length > 0 ?
              <div>
                <Switch>
                  <Route exact path="/">
                    {todoData.map((todo, i) =>
                      <TodoList key={i} data={todoData[i].newTodo} completed={todoData[i].completed} />
                    )}
                  </Route>
                  <Route exact path="/active">
                    {todoData.map((todo, i) =>
                      todoData[i].completed === false ? <TodoList key={i} data={todoData[i].newTodo} /> : null
                    )}
                  </Route>
                  <Route exact path="/completed">
                    {todoData.map((todo, i) =>
                      todoData[i].completed === true ? <TodoList key={i} data={todoData[i].newTodo} /> : null
                    )}
                  </Route>
                </Switch>
                <div className="todo-footer">
                  <ul>
                    <li>{todoData.length > 1 ? `${todoData.length} items` : `${todoData.length} item`} left</li>
                    <li>
                      <Link to="/" onClick={this.handleLinkClick}>
                        <span>All</span>
                      </Link>
                      <Link to="/active" onClick={this.handleLinkClick}>
                        <span>Active</span>
                      </Link>
                      <Link to="/completed" onClick={this.handleLinkClick}>
                        <span>Completed</span>
                      </Link>
                    </li>
                    <li>
                      <span>Clear completed</span>
                    </li>
                  </ul>
                </div>
              </div> : null}
          </div>
          {todoData.length > 0 ?
            <div>
              <div className="todo-footer-1"></div>
              <div className="todo-footer-2"></div>
            </div> : null}
        </div>
      </main>
    );
  }
}

export default Main;