var addCoffee = function(name) {
    return function(prevName) {
        return new Promise(function(resolve) {
            setTimeout(function () {
                var newName = prevName ? (prevName + ', ' + name) : name;
                console.log(newName);
                resolve(newName);
            }, 500);
        });
    };
};
addCoffee('Espresso')()
.then(addCoffee('Americano'))
.then(addCoffee('Cafe Mocha'))
.then(addCoffee('Cafe Latte'));