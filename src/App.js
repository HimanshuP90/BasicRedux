import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxDemo from './ReduxDemo';
import CalculatorRedux from './CalculatorRedux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ReduxDemo />
        <CalculatorRedux />
      </div>
    );
  }
}

export default App;
