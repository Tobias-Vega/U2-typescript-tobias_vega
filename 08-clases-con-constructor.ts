class Car {
  make: string;

  constructor(make: string) {
    this.make = make;
  }

  drive(): void {
    console.log(`Driving a ${this.make}`)
  }
}

const car = new Car("Volvo");

car.drive();