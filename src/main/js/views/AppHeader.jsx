import React, {Component} from 'react';
import './App.css';

class AppHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="App-header">
        <h1>
          Dig my todos
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    );
  }
}

export default AppHeader;
