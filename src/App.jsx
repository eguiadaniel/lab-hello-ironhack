import React, { Component } from 'react';
import logo from './logo.svg';
import Icon from './Icon';
import Navbar from './Navbar';
import './App.css';

const icon1 = {
  message: 'Declarative',
  path: './images/icon1.png'
};

const icon2 = {
  message: 'Components',
  path: './images/icon2.png'
};

const icon3 = {
  message: 'Single-Way',
  path: './images/icon3.png'
};

const icon4 = {
  message: 'JSX',
  path: './images/icon4.png'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <h1>
            Say hello to <br />
            ReactJS
          </h1>
          <p>
            You will learn a Frontend <br />
            framework from scratch, to <br />
            become an Ninja Developer.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Awesome
          </a>
        </header>
        <footer className="App-footer">
          <Icon message={icon1.message} path={icon1.path}></Icon>
          <Icon message={icon2.message} path={icon2.path}></Icon>
          <Icon message={icon3.message} path={icon3.path}></Icon>
          <Icon message={icon4.message} path={icon4.path}></Icon>
        </footer>
      </div>
    );
  }
}

export default App;
