// const { Shape, Circle, Square, Triangle } = require("./lib/shapes");
const shapes = require("./lib/shapes");
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
      choices: Object.keys(shapes),
      //   choices: ["Circle", "Triangle", "Square"],
      default: "Circle",
    },
    {
      type: "input",
      message: "What color would you like the shape to be for the logo?",
      name: "fill",
    },
  ])
  .then((answers) => {
    const shape = answers.shape;
    console.log(shape, typeof shape);
    //answers.shape OR answers['shape']
    //shapes.shape shapes[shape]
    const newLogo = new shapes[shape](
      answers.fill,
      answers.text,
      answers.textFill
    );
    console.log(newLogo);
    // if (shape === "Triangle") {
    //   const triLogo = new Triangle(
    //     newLogo.fill,
    //     newLogo.text,
    //     newLogo.textFill
    //   );
    //   return triLogo;
    // } else if (shape === "Square") {
    //   const sqrLogo = new Square(newLogo.fill, newLogo.text, newLogo.textFill);
    //   return sqrLogo;
    // } else if (shape === "Circle") {
    //   const circLogo = new Circle(newLogo.fill, newLogo.text, newLogo.textFill);
    //   return circLogo;
    // }
  });
//   .then(() => {
//       fs.writeFile("./output/logo.svg", )
//   })
// };

// buildSVG();
