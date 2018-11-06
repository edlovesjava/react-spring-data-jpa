import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="todo-list">
        {this.props.todos.map(
          todo => (<TodoItem todoItem={todo} key={todo._links.todoItem} />) 
        )}
      </ul>
    )
  }

}

export default TodoList;
