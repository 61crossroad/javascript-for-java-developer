var func = function (a, b, c) {
    console.log(this, a, b, c);
};

func(1, 2, 3);

console.log("=== call ===");

func.call({ x: 1 }, 4, 5, 6);

var obj = {
    a: 1,
    method: function (x, y) {
        console.log(this, x, y);
    }
};

obj.method(2, 3);
obj.method.call({ a: 4 }, 5, 6);

console.log("=== apply ===");

func.apply({ x: 1 }, [4, 5, 6]);

obj.method.apply({ a: 4 }, [5, 6]);