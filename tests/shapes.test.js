const Shapes = require("../lib/shapes");

describe("Shape", () => {
  describe("Circle", () => {
    it("should take three parametes, fill, text, and textFill and render a circle logo with respective values", () => {
      const fill = "red";
      const text = "BBB";
      const textFill = "white";
      const circle = new Shapes.Circle(fill, text, textFill);
      expect(circle.render()).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000 svg"><circle cx="150" cy="100" r="80" fill="${fill}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textFill}">${text}</text></svg>`
      );
    });
  });

  describe("Square", () => {
    it("should take three parametes, fill, text, and textFill and render a sqaure logo with respective values", () => {
      const fill = "red";
      const text = "BBB";
      const textFill = "white";
      const square = new Shapes.Square(fill, text, textFill);
      expect(square.render()).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="20" width="160" height="160" fill="${fill}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textFill}">${text}</text></svg>`
      );
    });
  });

  describe("Triangle", () => {
    it("should take three parametes, fill, text, and textFill and render a triangle logo with respective values", () => {
      const fill = "red";
      const text = "BBB";
      const textFill = "white";
      const triangle = new Shapes.Triangle(fill, text, textFill);
      expect(triangle.render()).toEqual(
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 10 250, 140 50, 140" fill="${fill}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textFill}">${text}</text></svg>`
      );
    });
  });
});
