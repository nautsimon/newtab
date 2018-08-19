import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Particles from "react-particles-js";

class App extends Component {
  render() {
    return (
      <div>
        <Particles
          params={{
            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#bbbbb",
                  blur: 1
                }
              },
              canvas: {
                width: "100%",
                height: "100%"
              }
            }
          }}
          // style={{
          //   height: "100px"
          // }}
        />
      </div>
    );
  }
}
export default App;
