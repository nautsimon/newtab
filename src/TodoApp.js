import React, { Component } from "react";

import TodoList from "./TodoList";
import "./todo.css";
import stArraytemp from "./index";

var stArray = [];

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stItems: stArraytemp,
      ltItems: []
    };

    this.addShortTermItem = this.addShortTermItem.bind(this);
    this.addLongTermItem = this.addLongTermItem.bind(this);
    this.deleteLongTermItem = this.deleteLongTermItem.bind(this);
    this.deleteShortTermItem = this.deleteShortTermItem.bind(this);
    // this.updateState = updateState.bind(this);
  }

  deleteShortTermItem(key) {
    // console.log("the neweststi " + this.state.stItems);
    // stArray = this.state.stItems;
    // let str = JSON.stringify(stArray);
    // localStorage.setItem("shortTermGoals", str);
    var filteredStItems = this.state.stItems.filter(function(item) {
      console.log(item.key);
      console.log("key: " + key);
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
    // console.log("longtermlist: " + this.state.ltItems.key);
    var filteredLtItems = this.state.ltItems.filter(function(item) {
      return item.key !== key;
    });
    this.setState({
      ltItems: filteredLtItems
    });
  }

  addShortTermItem(e) {
    if (this._inputElement.value !== "") {
      console.log("not blank ");

      var newShortTermItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
      stArray.push(newShortTermItem);
      console.log("STAERRAY CONCACT: " + stArray);
      let str = JSON.stringify(stArray);
      localStorage.setItem("shortTermGoals", str);
      console.log(localStorage.getItem("shortTermGoals"));
      this.setState({
        stItems: stArray
      });
    }
    this._inputElement.value = "";
    console.log(this.state.stItems);

    e.preventDefault();
  }
  addLongTermItem(e) {
    if (this._inputElement.value !== "") {
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

    e.preventDefault();
  }
  updateArray() {
    this.setState(
      {
        stItems: stArray
      },
      () => {
        console.log("ULTIMATE: " + this.state.stItems);
      }
    );
  }
  render() {
    // this.updateArray();
    // console.log("temp2: " + window.stArrayte);
    stArray = stArraytemp;
    // this.state.stItems = stArray;

    // console.log("new stitems " + window.stItems);
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
