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
    // var linksArr = [];
    // var namesArr = [];
    // for (let i = 0; i < theArr.length; i++) {
    //   linksArr = linksArr.concat(theArr[i].link);
    //   namesArr = namesArr.concat(theArr[i].name);
    // }
    // console.log("linksArr" + linksArr);
    // console.log("namesArr" + namesArr);
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
    // const { linkArray } = this.state;
    return (
      <div>
        <PopupFile handler={this.setNewArr} />
        <Links links={this.state.links} />
      </div>
    );
  }
}
export default Handler;
