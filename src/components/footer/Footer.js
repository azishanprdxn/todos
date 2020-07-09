import React, { Component } from 'react';
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="wrapper">
          <p>Double-click to edit a todo</p>
          <p>Inspired by petehunt</p>
          <p>Part of TodoMVC</p>
        </div>
      </footer>
    );
  }
}

export default Footer;