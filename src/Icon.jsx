import React, { Component } from 'react';
import logo from './logo.svg';

import './Icon.css';

class Icon extends Component {
  render() {
    return (
      <div className="Icon">
        <div className="Icon-items">
          <img src={this.props.path} className="Icon-logo" alt="icon" />
          <h2 className="Icon-message">{this.props.message}</h2>
        </div>
      </div>
    );
  }
}

export default Icon;
