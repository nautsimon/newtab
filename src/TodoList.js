import React, { Component } from "react";
import FlipMove from "react-flip-move";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }
  createTasks(item) {
    //this function is passing the argument item into
    return (
      <li onClick={() => this.delete(item.key)} key={item.key}>
        {item.text}
      </li>
    );
    //this is returning the
  }
  delete(key) {
    this.props.delete(key);
  }
  render() {
    var todoEntries = this.props.entries; //receving the entries
    var listItems = todoEntries.map(this.createTasks); //uses map to create a list where each item is turned into xml

    return (
      <ul className="list">
        <FlipMove duration={150} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
}

export default TodoList;
