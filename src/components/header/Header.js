import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="wrapper">
          <h1>todos</h1>
        </div>
      </header>
    );
  }
}

export default Header;