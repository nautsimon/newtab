import React, { Component } from "react";
import ReactDOM from "react-dom";
import PopupFile from "./PopupFile";
import Links from "./Links";
var popupDestination = document.querySelector("#popup");
class Handler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newArr: []
    };
    this.setNewArr = this.setNewArr.bind(this);
  }
  setNewArr(tharray) {
    console.log("eatmyfuckingass");
    // this.setState(
    //   {
    //     newArr: tharray
    //   }
    //   //   },
    //   //   () => {s
    //   //     console.log("YEET" + this.props.linkArray);
    //   //   }
    // );
  }

  render() {
    // const { linkArray } = this.state;
    return (
      <div>
        <PopupFile handler={this.setNewArr} />
        {/* <Links linkArray={linkArray} /> */}
      </div>
    );
  }
}
export default Handler;
ReactDOM.render(
  <div>
    <PopupFile />
  </div>,
  popupDestination
);
