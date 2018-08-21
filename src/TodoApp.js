import React, { Component } from "react";

import TodoList from "./TodoList";
import "./todo.css";
var stArray = [];
var ltArray = [];
class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stItems: [],
      ltItems: []
    };

    this.addShortTermItem = this.addShortTermItem.bind(this);
    this.addLongTermItem = this.addLongTermItem.bind(this);
    this.deleteLongTermItem = this.deleteLongTermItem.bind(this);
    this.deleteShortTermItem = this.deleteShortTermItem.bind(this);
  }
  deleteShortTermItem(key) {
    var filteredStItems = this.state.stItems.filter(function(item) {
      return item.key !== key;
    });
    this.setState({
      stItems: filteredStItems
    });
  }

  deleteLongTermItem(key) {
    var filteredLtItems = this.state.ltItems.filter(function(item) {
      return item.key !== key;
    });
    this.setState({
      ltItems: filteredLtItems
    });
  }
  addShortTermItem(e) {
    if (this._inputElement !== "") {
      stArray = stArray.concat(this._inputElement.value);
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
    localStorage.setItem("shortTermGoals", stArray);
    console.log(localStorage.getItem("shortTermGoals"));
    e.preventDefault();
  }
  addLongTermItem(e) {
    if (this._inputElement !== "") {
      ltArray = ltArray.concat(this._inputElement.value);
      var newLongTermItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
      this.setState(prevState => {
        return {
          ltItems: prevState.ltItems.concat(newLongTermItem)
        };
      });
    }
    this._inputElement.value = "";
    console.log(this.state.ltItems);
    localStorage.setItem("longTermGoals", ltArray);
    console.log(localStorage.getItem("longTermGoals"));
    e.preventDefault();
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="columns">
          <div className="shortTermColumn">
            <h4>To Do Today</h4>
            <TodoList
              entries={this.state.stItems}
              delete={this.deleteShortTermItem}
            />
          </div>
          <div className="longTermColumn">
            <h4>To Do Later</h4>
            <TodoList
              entries={this.state.ltItems}
              delete={this.deleteLongTermItem}
            />
          </div>
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
