import React, { Component } from 'react';
import './App.css';
import AppHeader from './AppHeader';
import TodoList from './TodoList';
import DataLoader from './DataLoader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    new DataLoader('/api/todoItems').fetchData().then(todos => {
      this.setState ( {
        todos: todos,
      })
    })
  }

  render() {
    return (
      <div className="App">
        <AppHeader />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}


export default App;
