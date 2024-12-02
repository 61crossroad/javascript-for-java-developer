console.log("== call ==");
var obj = {
    outer: function () {
        console.log(this);
        var innerFunc = function () {
            console.log(this);
        };
        innerFunc.call(this);
    }
};
obj.outer();

console.log("== bind ==");
var obj2 = {
    outer: function() {
        console.log(this);
        var innerFunc = function () {
            console.log(this);
        }.bind(this);
        innerFunc();
    }
};
obj2.outer();