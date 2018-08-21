import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Particles from "react-particles-js";
import TodoApp from "./TodoApp";

let tempStArray = localStorage.getItem("shortTermGoals");
let tempLtArray = localStorage.getItem("longTermGoals");
console.log("swag" + tempLtArray);
if (tempStArray === undefined) {
  var stArraytemp = [];
  console.log("if" + typeof stArraytemp);
  console.log("temp " + stArraytemp);
} else {
  console.log("else" + localStorage.getItem("shortTermGoals"));
  let original = localStorage.getItem("shortTermGoals");
  let obj = JSON.parse(original);
  stArraytemp = obj;
  console.log(stArraytemp);
}

if (tempLtArray === undefined || tempLtArray === null) {
  var ltArraytemp = [];
  console.log("if" + typeof ltArraytemp);
  console.log("temp " + ltArraytemp);
} else {
  console.log("else" + localStorage.getItem("longTermGoals"));
  let original = localStorage.getItem("longTermGoals");
  let obj = JSON.parse(original);
  ltArraytemp = obj;
  console.log(stArraytemp);
}

export { stArraytemp, ltArraytemp };
var particleDestination = document.querySelector("#particle");
var todolistDestination = document.querySelector("#todoList");

ReactDOM.render(
  <div>
    <Particles
      params={{
        particles: {
          number: {
            value: 40,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#dddddd"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 6
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 200,
              size: 10,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }}
    />
  </div>,
  particleDestination
);
ReactDOM.render(
  <div>
    <TodoApp />
  </div>,
  todolistDestination
);
