function a () {
    console.log(b);
    var b = 'bbb';
    console.log(b);
    function b () { };
    console.log(b);
};

a();

function a2 () {
    var b;
    function b () { };

    console.log(b);
    b = 'bbb';
    console.log(b);
    console.log(b);
};

a2();

function a3 () {
    var b;
    var b = function b () {};

    console.log(b);
    b = 'bbb';
    console.log(b);
    console.log(b);
};

a3();
