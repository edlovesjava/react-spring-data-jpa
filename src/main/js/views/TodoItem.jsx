import React, {Component} from 'react';


class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="todo-item" key="{this.props.key}">{this.props.todoItem.text}</li>
    )
  }
}

export default TodoItem;
