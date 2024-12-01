var obj1 = {
    outer: function () {
        console.log(this); // obj1
        var innerFunc = function () {
            console.log(this);
        }
        innerFunc(); // global

        var obj2 = {
            innerMethod: innerFunc
        };
        obj2.innerMethod(); // obj
    }
};
obj1.outer();

console.log("== this to self ==");

var obj2 = {
    outer: function () {
        console.log(this);
        var innerFunc1 = function() {
            console.log(this);
        };
        innerFunc1();

        var self = this;
        var innerFunc2 = function () {
            console.log(self);
        };
        innerFunc2();
    }
}

obj2.outer();

console.log("== ES6 ==");

var obj3 = {
    outer: function () {
        console.log(this);
        var innerFunc = () => {
            console.log(this);
        };
        innerFunc();
    }
};
obj3.outer();

console.log("== ES6 ?? inner function only ==");

var obj4 = {
    outer: () => {
        console.log(this);
        var innerFunc = () => {
            console.log(this);
        };
        innerFunc();
    }
};

obj4.outer();