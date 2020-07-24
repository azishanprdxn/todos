import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Switch,
  Route,
  Link
} from "react-router-dom";

import './Main.css';
import TodoList from './TodoList';

import { addTodo , allTodos } from '../../features/todo/todoSlice';

const ENTER_KEY = 13; // Enter Key Code
export let todoData = [];

const Main = () => {
  const count = useSelector(allTodos);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    id: 0,
    newTodo: '',
    completed: false
  });

  useEffect(() => {
    if (localStorage.getItem('key')) {
      let storage = JSON.parse(localStorage.getItem('key'));
      for (let i = 0; i < storage.length; i++) {
        todoData.push(storage[i]);
      }
    }
    setState({ id: todoData.length });
  }, []);

  // On key change to update value
  const handleChange = (event) => {
    setState({ id: state.id, newTodo: event.target.value, completed: false });
  }

  // On enter key press
  const handleKeyDown = (event) => {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }
    event.preventDefault();
    let val = state.newTodo.trim();
    if (val) {
      setState({
        id: state.id + 1,
        newTodo: '',
        completed: false
      });
      todoData.push(state);
      localStorage.setItem('key', JSON.stringify(todoData));
      console.log(state);
      console.log(count, dispatch(addTodo));
    }
  }

  const handleOnCheck = (event) => {
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

  const handleLinkClick = (event) => {
    const activeURL = document.querySelectorAll('.todo-footer a span');
    for (let i = 0; i < activeURL.length; i++) {
      activeURL[i].className = '';
    }
    event.target.className = 'active';
  }

  const clearCompleted = () => {
    console.log('ClearCompleted');
  }

  return (
    <main>
      <div className="wrapper">
        <div className="todos">
          <input type="checkbox" className="select-all" onClick={handleOnCheck} />
          <input autoFocus
            className="add-todo"
            placeholder="What needs to be done?"
            value={state.newTodo || ''}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
          />
          {todoData.length > 0 ?
            <div>
              <Switch>
                <Route exact path="/">
                  {
                    todoData.map((todo, i) =>
                      <TodoList key={i} data={todoData[i].newTodo} completed={todoData[i].completed} />
                    )
                  }
                </Route>
                <Route exact path="/todos">
                  {
                    todoData.map((todo, i) =>
                      <TodoList key={i} data={todoData[i].newTodo} completed={todoData[i].completed} />
                    )
                  }
                </Route>
                <Route exact path="/active">
                  {
                    todoData.map((todo, i) =>
                      todoData[i].completed === false ? <TodoList key={i} data={todoData[i].newTodo} /> : null
                    )
                  }
                </Route>
                <Route exact path="/completed">
                  {
                    todoData.map((todo, i) =>
                      todoData[i].completed === false ? <TodoList key={i} data={todoData[i].newTodo} /> : null
                    )
                  }
                </Route>
              </Switch>
              <div className="todo-footer">
                <ul>
                  <li>{todoData.length > 1 ? `${todoData.length} items` : `${todoData.length} item`} left</li>
                  <li>
                    <Link to="/" onClick={handleLinkClick}>
                      <span>All</span>
                    </Link>
                    <Link to="/active" onClick={handleLinkClick}>
                      <span>Active</span>
                    </Link>
                    <Link to="/completed" onClick={handleLinkClick}>
                      <span>Completed</span>
                    </Link>
                  </li>
                  <li>
                    <span onClick={clearCompleted}>Clear completed</span>
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

export default Main;