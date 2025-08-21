class Car {
  private make: string;

  constructor(make: string) {
    this.make = make;
  }

  drive(): void {
    console.log(`Driving a ${this.make}`);
  }

  getMake(): string {
    return this.make;
  }
}

class ElectricCar extends Car {
  batteryLife: number;

  constructor(batteryLife: number, make: string){
    super(make)
    this.batteryLife = batteryLife;
  }


  charge(): void {
    console.log("The car is charging");
  }
}