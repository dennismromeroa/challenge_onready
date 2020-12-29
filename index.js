carsModels = require('./carsModels')

class Cars {
    constructor(brand, model, price) {
      this.brand = brand;
      this.model = model;
      this.price = price;
    }
    priceFormat() {
      var parts = this.price.toFixed(2).toString().split(".");
      var result =
        parts[0].replace(/\B(?=(\d{3})+(?=$))/g, ".") +
        (parts[1] ? "," + parts[1] : "");
      return `$${result}`;
    }
  }
  
  class Car extends Cars {
    constructor(brand, model, doors, price) {
      super(brand, model, price);
      this.doors = doors;
    }
  }
  
  class Motorcycle extends Cars {
    constructor(brand, model, cilindre, price) {
      super(brand, model,price);
      this.cilindre = cilindre;
    }
    cilindreFormat() {
      return `${this.cilindre}`;
    }
  }
   
  const allMachine = (carsModels) => {
    var cars = [];
    carsModels.forEach((car) => {
      if (car.doors) {
        cars.push(
          new Car(
            car.brand,
            car.model,
            car.doors,
            car.price
          )
        );
      } else {
        cars.push(
          new Motorcycle(
            car.brand,
            car.model,
            car.cilindre,
            car.price
          )
        );
      }
    });
    cars.forEach((car) => {
      if (car.doors) {
        console.log(
          `Marca: ${car.brand} // Modelo: ${car.model} // Puertas: ${
            car.doors
          } // Precio: ${car.priceFormat()}`
        );
      } else {
        console.log(
          `Marca: ${car.brand} // Modelo: ${
            car.model
          } // Cilindrada: ${
            car.cilindre
          }cc // Precio: ${car.priceFormat()}`
        );
      }
    });

    console.log("=============================");

    //Auto Caro

    var carsExpensive = cars.sort((a, b) => b.price - a.price);
    console.log(
      `Vehículo más caro: ${carsExpensive[0].brand} ${carsExpensive[0].model}`
    );

    //Auto Barato

    console.log(
      `Vehículo más barato: ${carsExpensive[carsExpensive.length - 1].brand} ${
        carsExpensive[carsExpensive.length - 1].model
      }`
    );

    //Auto con 'Y'

    var lyrics = cars.filter((car) => {
      return car.model.includes("Y");
    });
    console.log(
      `Vehículo que contiene en el modelo la letra ‘Y’: ${lyrics[0].brand} ${
        lyrics[0].model
      } ${lyrics[0].priceFormat()}`
    );

    console.log("=============================");

    //Extra

    console.log("Vehículos ordenados por precio de mayor a menor:");
    carsExpensive.forEach((car) => {
      console.log(`${car.brand} ${car.model}`);
    });
  };

  allMachine(carsModels);