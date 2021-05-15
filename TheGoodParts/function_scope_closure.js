// function scope
var foo = function () {
    var a = 3, b = 5;

    var bar = function () {
        var b = 7, c = 11;
        console.log(a, b, c);

        a += b + c;
        console.log(a, b, c);
    };

    bar();
    console.log(a, b);
};

foo();

// closure
var myObject = function () {
    var value = 0;

    return {
        increment: function (inc) {
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function () {
            return value;
        }
    }
}();
console.log(myObject.value); // undefined
console.log(myObject.getValue());
myObject.increment();
console.log(myObject.getValue());
myObject.increment(3);
console.log(myObject.getValue());


var quo = function (status) {
    return {
        get_status: function () {
            return status;
        }
    };
};

var myQuo = quo("amazed");
console.log(myQuo.status); // undefined
console.log(myQuo.get_status());


var fade = function (node) {
    var level = 1;
    var step = function () {
        var hex = level.toString(16).toUpperCase();
        node.style.backgroundColor = '#FFFF' + hex + hex;
        console.log(node.style.backgroundColor);
        if (level < 15) {
            level += 1;
            setTimeout(step, 100);
        }
    };

    setTimeout(step, 100);
}
// fade(document.body);
fade({
    style: {
        backgroundColor: ''
    }
});


// i itself or value of i
var add_the_handlers_bad = function (nodes) {
    var i;
    for (i = 0; i < nodes.length; i++) {
        nodes[i].onclick = function (e) {
            alert(i);
        }
    }
};

var add_the_handlers_good = function (nodes) {
    var i;
    for (i = 0; i < nodes.length; i++) {
        nodes[i].onclick = function (i) {
            return function (e) {
                alert(i);
            };
        }(i);
    }
};
