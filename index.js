const { Shape, Circle, Square, Triangle } = require("./lib/shapes");
const fs = require("fs");
const inquirer = require("inquirer");

buildSVG = () => {
  return inquirer.prompt([
    {
      type: "input",
      message:
        "What text would you like in your logo(must be 3 characters or less)?",
      name: "text",
    },
    {
      type: "input",
      message: "What color would you like for text to be in the logo?",
      name: "textFill",
    },
    {
      type: "list",
      name: "shape",
      message: "Please choose a shape for your logo?",
      choices: ["Circle", "Triangle", "Square"],
      default: "Circle",
    },
    {
      type: "input",
      message:
        "What color would you like the shape to be filled with in the logo?",
      name: "fill",
    },
  ]);
};
