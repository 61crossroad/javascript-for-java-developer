var func = function (x) {
    console.log(this, x);
};

func(1);
console.log("======");

var obj = {
    method: func
};

obj.method(2);
obj['method'](3);