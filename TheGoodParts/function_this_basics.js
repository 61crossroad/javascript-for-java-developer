// call method
// method is a property of an Object
console.log("## call method");

var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    },
    getValue: function () {
        return this.value;
    }
};

myObject.increment();
console.log("myObject.increment(), value = " + myObject.value);

myObject.increment(2);
console.log("myObject.increment(2), value = " + myObject.value);

// function is not a property of an Object
console.log("\n## function");

var add = function (a, b) {
    return a + b;
}
var sum = add(3, 4);
console.log("add(3, 4) = " + sum);

// call function
console.log("\n## call function");

var value = 5;

myObject.double = function () {
    var that = this;
    var value = 4;
    
    var helper = function() {
        var value = 8;

        // undefined forever lol
        console.log("helper().this.value = " + this.value);
        // wtf....???
        
        that.value = add(that.value, that.value);
    };

    helper();
};

console.log("myObject.value = " + myObject.value);
myObject.double();
console.log("myObject.double(), value = " + myObject.getValue());

// call constructor
console.log("\n## call constructor");

var Quo = function (string) {
    this.status = string;
};

Quo.prototype.get_status = function () {
    return this.status;
}

var myQuo = new Quo("confused");
console.log(myQuo.get_status());

// call apply
console.log("\n## call apply");

var array = [3, 4];
var sum = add.apply(null, array);
console.log(sum);

var statusObject = {
    status: 'A-OK'
};

var status = Quo.prototype.get_status.apply(statusObject);
console.log(status);

// arguments
var sum = function () {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
};

console.log(sum(4, 8, 15, 16, 23, 42));

// exceptions
var addEx = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name: 'TypeError',
            message: 'add needs numbers'
        };
    }
    return a + b;
};

var try_it = function () {
    try {
        addEx("seven");
    } catch (e) {
        console.log(e.name + ': ' + e.message);
    }
};
try_it();

// extends built-in objects
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

Number.method('integer', function () {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});
console.log((-10 / 3).integer());

String.method('trim', function () {
    return this.replace(/^\s+|\s+$/g, '');
})
console.log('"' + "    neat    ".trim() + '"');

Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
    return this;
};
