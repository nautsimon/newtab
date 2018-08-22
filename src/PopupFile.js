import React, { Component } from "react";
import "./popup.css";
import Popup from "reactjs-popup";
// import PropTypes from "prop-types";
// import "./Handler.js";

class PopupFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: []
    };
    this.setLinks = this.setLinks.bind(this);
  }

  setLinks(e) {
    var tempArray = [];
    for (let i = 0; i < 7; i++) {
      console.log(this["name" + i].value);
      console.log(this["link" + i].value);
      if (this["name" + i].value !== "" && this["link" + i].value !== "") {
        var newLink = {
          link: this["link" + i].value,
          name: this["name" + i].value,
          key: Date.now()
        };

        tempArray = tempArray.concat(newLink);
      }
    }
    this.setState(
      prevState => {
        return {
          links: tempArray
        };
      },
      () => {
        var pls = this.state.links;
        this.props.handler(pls);
        console.log("set" + this.state.links);
      }
    );

    console.log("updatepassed" + this.state.links);
    e.preventDefault();
  }

  render() {
    return (
      <Popup
        trigger={<button className="openPopup"> [+] </button>}
        modal
        closeOnDocumentClick
      >
        {close => (
          <div className="popupMain">
            <a className="closeButton" onClick={close}>
              &times;
            </a>

            <div className="popupMain">
              <h2>Customize Quick Links</h2>
              <p>Put your links below, names cannot exceed 7 characters</p>
              <form className="popupColumns">
                <div className="leftColumn">
                  <h3>Link</h3>
                  <input ref={a => (this.link0 = a)} placeholder="add item" />
                  <input ref={a => (this.link1 = a)} placeholder="add item" />
                  <input ref={a => (this.link2 = a)} placeholder="add item" />
                  <input ref={a => (this.link3 = a)} placeholder="add item" />
                  <input ref={a => (this.link4 = a)} placeholder="add item" />
                  <input ref={a => (this.link5 = a)} placeholder="add item" />
                  <input ref={a => (this.link6 = a)} placeholder="add item" />
                </div>
                <div className="rightColumn">
                  <h3>Name</h3>
                  <input ref={a => (this.name0 = a)} placeholder="add item" />
                  <input ref={a => (this.name1 = a)} placeholder="add item" />
                  <input ref={a => (this.name2 = a)} placeholder="add item" />
                  <input ref={a => (this.name3 = a)} placeholder="add item" />
                  <input ref={a => (this.name4 = a)} placeholder="add item" />
                  <input ref={a => (this.name5 = a)} placeholder="add item" />
                  <input ref={a => (this.name6 = a)} placeholder="add item" />
                </div>
              </form>
              <div className="centering">
                <button onClick={this.setLinks} className="submitForm">
                  Update Links
                </button>
              </div>
            </div>
          </div>
        )}
      </Popup>
    );
  }
}

export default PopupFile;
