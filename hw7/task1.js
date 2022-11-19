class Shape {
    constructor(x, y) {
      this.xPos = x;
      this.yPos = y;
    }
  }

  class Rectangle extends Shape {
    constructor(x, y, height, width) {
        super(x, y);
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width
    }
}
class Square extends Rectangle {
    constructor(x, y, size) {
      super(x, y, size, size);
    }
  }
  
  class Triangle extends Shape {
    constructor(x, y, base, height) {
      super(x, y);
      this.base = base;
      this.height = height;
    }
  
    getArea() {
      return (1 / 2) * this.base * this.height;
    }
  }
  
  class Circle extends Shape {
    constructor(x, y, radius) {
      super(x, y);
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    getPerimeter() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  class Ellipse extends Shape {
    constructor(x, y, rX, rY) {
      super(x, y);
      this.rX = rX;
      this.rY = rY;
    }
  
    getArea() {
      return Math.PI * this.rX * this.rY;
    }
  
    getPerimeter() {
      return (
        2 * Math.PI * Math.sqrt((Math.pow(this.rX, 2) + Math.pow(this.rY, 2)) / 2)
      );
    }
  }
  
  