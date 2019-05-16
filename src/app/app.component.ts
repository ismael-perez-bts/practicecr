import { Component, OnInit, OnDestroy } from '@angular/core';
import FakeRequests from './fakeRequests/requests';
import { Car } from './models/car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ FakeRequests ]
})
export class AppComponent implements OnDestroy {
  title: string = 'Car Page';
  carAction: any = null;
  selectedCar: String;
  carList: Array<Car>;
  filteredCars: Array<Car>;

  constructor(private requests: FakeRequests) {}

  ngOnInit() {
    this.loadCars();
  }

  ngOnDestroy() {

  }

  async loadCars() {
    this.requests.getCars()
    .then((cars: Array<Car>) => {
      this.carList = cars;
    })
    .catch((err) => {
      alert(err);
    });
  }

  selectCar(): Car {
    return this.carList.filter(item => item.vin == this.selectedCar)[0];
  }

  resetSelectedCar() {
    this.selectedCar = '';
  }

  selectAllCoupes() {
    this.resetSelectedCar();
    var cars = [];
    let i = 0;
    let l = this.carList.length;

    for (i;i < l; i++) {
      let car = this.carList[i];

      if (car.doors === 2) {
        cars.push(car);
      } 
    }

    this.filteredCars = cars;
  }

  selectAllSedans() {
    this.resetSelectedCar();
    var cars = [];
    let i = 0;
    let l = this.carList.length;

    for (i;i < l; i++) {
      let car = this.carList[i];

      if (car.doors == 4) {
        cars.push(car);
      } 
    }

    this.filteredCars = cars;
  }

  modifySelectedCarDoors(doors: number) {
    let car = this.selectCar();
    car.doors = doors;
    let carsList = this.carList.map((item) => {
      return car.vin === item.vin ? car : item;
    });

    this.carList = carsList;
  }

  honk() {
    this.carAction = 'Beep! Beep!';
  }

  moveForward() {
    this.carAction = 'is moving forward.';
  }

  moveBackwards(): void {
    this.carAction = 'is movin backwards.';
  }

  resetAction(): void {
    this.carAction = null;
  }

  carType(): string {
    return this.selectCar().doors === 4 ? 'sedan' : 'coupe';
  }
}
