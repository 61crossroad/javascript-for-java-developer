var empty_object = {};

var stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
}

var flight = {
    airlines: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sidney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
};

console.log(stooge["first-name"]);
console.log(flight.departure.IATA);
console.log(stooge["middle-name"]);

var middle = stooge["middle-name"] || "(none)";
var status = flight.status || "unknown";
console.log(middle);
console.log(status);

var x = stooge;
x.nickname = 'Curly';
console.log(stooge.nickname);
console.log(x.nickname);

var nick = stooge.nickname;

// prototype
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
}
var another_stooge = Object.create(stooge);
console.log(another_stooge['last-name'] + " " + another_stooge['first-name']);

another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = 'Moe';

stooge.profession = 'actor';
console.log(another_stooge.profession);

console.log(typeof flight.number);
console.log(typeof flight.status);
console.log(typeof flight.arrival);
console.log(typeof flight.manifest);

console.log(typeof flight.toString);
console.log(typeof flight.constructor);

console.log(flight.hasOwnProperty('number'));
console.log(flight.hasOwnProperty('constructor'));

var name;
for (name in another_stooge) {
    if (typeof another_stooge[name] !== 'function') {
        console.log(name + ': ' + + another_stooge[name]);
    }
}

var i;
var properties = [
    'first-name',
    'middle-name',
    'last-name',
    'profession'
]
for (i = 0; i < properties.length; i++) {
    console.log(properties[i] + ': ' + another_stooge[properties[i]]);
}

console.log(another_stooge.nickname);
delete another_stooge.nickname;
console.log(another_stooge.nickname);

var MYAPP = {};
MYAPP.stooge = {
    "first-name": "Joe",
    "last-name": "Howard"
};
