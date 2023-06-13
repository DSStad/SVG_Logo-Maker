class Shape {
  constructor() {
    render = () => {
      return `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg"></svg>
        `;
    };
  }
}

class Square extends Shape {
    constructor() {
        super(render())
    }
}
