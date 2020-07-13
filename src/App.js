import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header'
import Main, { todoData } from './components/main/Main'
import Footer from './components/footer/Footer';

if (todoData.length > 0) {
  window.onload = () => {
    console.log(localStorage.getItem('key'));
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
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
