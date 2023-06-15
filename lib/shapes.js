class Shape {
  constructor(fill, text, textFill) {
    this.fill = fill;
    this.text = text;
    this.textFill = textFill;
  }
}

class Circle extends Shape {
  constructor(fill, text, textFill) {
    super(fill, text, textFill);
  }
  render = () => {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.fill}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textFill}">${this.text}</text></svg>`;
  };
}

class Square extends Shape {
  constructor(fill, text, textFill) {
    super(fill, text, textFill);
  }
  render = () => {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="20" width="160" height="160" fill="${this.fill}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textFill}">${this.text}</text></svg>`;
  };
}

class Triangle extends Shape {
  constructor(fill, text, textFill) {
    super(fill, text, textFill);
  }
  render = () => {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 10 250, 140 50, 140" fill="${this.fill}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textFill}">${this.text}</text>
  </svg>`;
  };
}

module.exports = {
//   Shape,
 Circle,
  //  Circle: Circle
   Square,
   Triangle,
};
//module.exports = Triangle;
