import React, { Component } from "react";

// import TodoItems from "./TodoItems";
import "./todo.css";

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stItems: [],
      ltItems: []
    };

    this.addShortTermItem = this.addShortTermItem.bind(this);
  }
  addShortTermItem(e) {
    if (this._inputElement !== "") {
      var newShortTermItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
      this.setState(prevState => {
        return {
          stItems: prevState.stItems.concat(newShortTermItem)
        };
      });
    }
    this._inputElement.value = "";
    console.log(this.state.stItems);
    e.preventDefault();
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="shortTermColumn">
          <h6>Short Term </h6>
          <TodoItemsST entries={this.state.stItems} />
        </div>

        <div className="entryForm">
          <button type="submit" onClick={this.addShortTermItem}>
            Add to Today
          </button>
          <input ref={a => (this._inputElement = a)} placeholder="add item" />
          <button type="submit" onClick={this.addLongTermItem}>
            Add to Long Term
          </button>
        </div>
      </div>
    );
  }
}
export default TodoApp;
