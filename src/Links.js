import React, { Component } from "react";
class Links extends Component {
  //   constructor(props) {
  //     super(props);
  //     // this.createTasks = this.createTasks.bind(this);
  //   }
  //   createTasks(item) {
  //     return (
  //       <li>
  //         <a href={"https://mail.google.com/mail/u/0/#inbox"}>[gmail]</a>
  //       </li>
  //       // <li onClick={() => this.delete(item.key)} key={item.key}>
  //       //   <span className="listText">{item.text}</span>
  //       // </li>
  //     );
  //   }

  render() {
    console.log("YEET" + this.props.linkArray);
    // var todoEntries = this.props.entries; //receving the entries
    // var listItems = todoEntries.map(this.createTasks); //uses map to create a list where each item is turned into xml

    return true;
    //   <div id="nav-a">
    //     <nav class="border">
    //       <ul>{listItems}</ul>
    //     </nav>
    //   </div>
  }
}

export default Links;
