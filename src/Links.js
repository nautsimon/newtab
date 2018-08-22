import React, { Component } from "react";
class Links extends Component {
  constructor(props) {
    super(props);
    this.createLinks = this.createLinks.bind(this);
  }

  createLinks(item) {
    return (
      <li key={item.key}>
        <a href={item.link}>[{item.name}]</a>
      </li>
    );
  }

  render() {
    var input = this.props.links;

    var listLinks = input.map(this.createLinks);

    return (
      <div id="nav-a">
        <nav className="border">
          <ul>{listLinks}</ul>
        </nav>
      </div>
    );
  }
}

export default Links;
