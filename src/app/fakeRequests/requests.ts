export default class FakeRequests {
  getCars() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            make: 'Nissan',
            model: 'Altima',
            doors: 4,
            color: 'White',
            year: 2017,
            vin: '12AB'
          },
          {
            make: 'Honda',
            model: 'Civic',
            doors: 2,
            color: 'Blue',
            year: 2019,
            vin: '19CA',
          },
          {
            make: 'Ford',
            model: 'Mustang',
            doors: 2,
            color: 'Black',
            year: 2016,
            vin: '88ZX'
          },
          {
            make: 'Volkswagen',
            model: 'Gol',
            doors: 2,
            color: 'Red',
            year: 2016,
            vin: '56WB'
          },
        ]);
      }, 25)
    });
  }
}