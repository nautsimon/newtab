import React, { Component } from "react";
import TodoList from "./TodoList";
import "./todo.css";
import { stArraytemp, ltArraytemp } from "./InitialConfig";

var stArray = [];
stArray = stArraytemp;

var ltArray = [];
ltArray = ltArraytemp;
class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stItems: stArraytemp,
      ltItems: ltArraytemp
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
    this.setState(
      {
        stItems: filteredStItems
      },
      () => {
        stArray = this.state.stItems;
        let str = JSON.stringify(stArray);
        localStorage.setItem("shortTermGoals", str);
      }
    );
  }

  deleteLongTermItem(key) {
    var filteredLtItems = this.state.ltItems.filter(function(item) {
      return item.key !== key;
    });
    this.setState(
      {
        ltItems: filteredLtItems
      },
      () => {
        ltArray = this.state.ltItems;
        let str = JSON.stringify(ltArray);
        localStorage.setItem("longTermGoals", str);
      }
    );
  }

  addShortTermItem(e) {
    if (this._inputElement.value !== "") {
      var newShortTermItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
      stArray = stArray.concat(newShortTermItem);
      let str = JSON.stringify(stArray);
      localStorage.setItem("shortTermGoals", str);
      this.updateSt();
    }
    this._inputElement.value = "";
    e.preventDefault();
  }
  updateSt() {
    this.setState({
      stItems: stArray
    });
  }
  updateLt() {
    this.setState({
      ltItems: ltArray
    });
  }
  addLongTermItem(e) {
    if (this._inputElement.value !== "") {
      var newLongTermItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
      ltArray = ltArray.concat(newLongTermItem);

      let str = JSON.stringify(ltArray);
      localStorage.setItem("longTermGoals", str);

      this.updateLt();
    }
    this._inputElement.value = "";
    e.preventDefault();
  }
  render() {
    return (
      <div className="todoListMain">
        <div className="columns">
          <div className="shortTermColumn">
            <p className="listName">To Do Today</p>
            <TodoList
              entries={this.state.stItems}
              delete={this.deleteShortTermItem}
            />
          </div>
          <div className="longTermColumn">
            <p className="listName">To Do Later</p>
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
