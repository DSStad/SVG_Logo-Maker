const { Shape, Circle, Square, Triangle } = require("./lib/shapes");
const fs = require("fs");
const inquirer = require("inquirer");
const { squareCorners } = require("cli-spinners");

// const buildSVG = () => {
inquirer
  .prompt([
    {
      type: "input",
      message:
        "What text would you like in your logo? (must be 3 characters or less)",
      name: "text",
    },
    {
      type: "input",
      message: "What color would you like the text for the logo?",
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
      message: "What color would you like the shape to be for the logo?",
      name: "fill",
    },
  ])
  .then((answers) => {
    const newLogo = answers;
    console.log(newLogo);
    const shape = newLogo.shape;
    console.log(shape, typeof shape);
    if (shape === "Triangle") {
      const triLogo = new Triangle(
        newLogo.fill,
        newLogo.text,
        newLogo.textFill
      );
      return triLogo;
    } else if (shape === "Square") {
      const sqrLogo = new Square(newLogo.fill, newLogo.text, newLogo.textFill);
      return sqrLogo;
    } else if (shape === "Circle") {
      const circLogo = new Circle(newLogo.fill, newLogo.text, newLogo.textFill);
      return circLogo;
    }
  });
//   .then(() => {
//       fs.writeFile("./output/logo.svg", )
//   })
// };

// buildSVG();
