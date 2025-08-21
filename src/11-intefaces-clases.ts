interface Shape {
  area: () => number;
}

class Circle implements Shape {

  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
  
  area(): number {
    return Math.PI * (this.radius ** 2);
  }
}

const circle: Circle = new Circle(4);

console.log(circle.area());