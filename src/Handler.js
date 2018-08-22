import React, { Component } from "react";
import Links from "./Links";
import PopupFile from "./PopupFile";

class Handler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: []
    };
    this.setNewArr = this.setNewArr.bind(this);
  }
  consolee(item) {
    console.log(item.links);
  }
  setNewArr(items) {
    console.log("newstate" + this.state.links);
    console.log("newstate" + this.state.names);
    var theArr = items;
    this.setState(
      prevState => {
        return {
          links: theArr
        };
      },

      () => {
        console.log("newstate" + this.state.links);
      }
    );
  }
  render() {
    return (
      <div>
        <PopupFile handler={this.setNewArr} />
        <Links links={this.state.links} />
      </div>
    );
  }
}
export default Handler;
