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
