import React, { Component } from "react";
import "./popup.css";
import Popup from "reactjs-popup";
import { linksTemp } from "./InitialConfig";

var importedLinks = [];
importedLinks = linksTemp;
class PopupFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: importedLinks
    };
    this.props.handler(this.state.links);

    this.setLinks = this.setLinks.bind(this);
  }

  setLinks(e) {
    var tempArray = [];
    for (let i = 0; i < 7; i++) {
      if (this["name" + i].value !== "" && this["link" + i].value !== "") {
        var newLink = {
          link: this["link" + i].value,
          name: this["name" + i].value,
          key: Date.now()
        };

        tempArray = tempArray.concat(newLink);
        let str = JSON.stringify(tempArray);
        localStorage.setItem("links", str);
        this.props.handler(tempArray);
      }
    }
    this.setState(
      prevState => {
        return {
          links: tempArray
        };
      },
      () => {}
    );

    e.preventDefault();
  }

  render() {
    return (
      <Popup
        trigger={
          <button className="openPopup" title="Change Quick Links">
            {" "}
            [+]{" "}
          </button>
        }
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
              <p>Put your (full) links below</p>

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
