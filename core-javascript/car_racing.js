var createCar = function () {
    var fuel = Math.ceil(Math.random() * 10 + 10);
    var power = Math.ceil(Math.random() * 3 + 2);
    var moved = 0;
    var publicMembers = {
        get moved() {
            return moved;
        },
        run: function () {
            var km = Math.ceil(Math.random() * 6);
            var wasteFuel = km / power;
            if (fuel < wasteFuel) {
                console.log("Can't Move");
                return;
            }
            fuel -= wasteFuel;
            moved += km;
            console.log(km + 'km moved (total ' + moved + 'km). remain fuel: ' + fuel);
        }
    };
    Object.freeze(publicMembers);
    return publicMembers;
};
var car = createCar();
console.log(car);

car.run();
console.log(car.moved);
console.log(car.fuel);
console.log(car.power);

car.fuel = 1000;
console.log(car.fuel);
car.run();

car.power = 100;
console.log(car.power);
car.run();

car.moved = 1000;
console.log(car.moved);
car.run();