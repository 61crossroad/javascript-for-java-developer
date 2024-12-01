function a (x) {
    console.log(x);
    var x;
    console.log(x);
    var x = 2;
    console.log(x);
};

a(1);

function a2 (x) {
    var x = 1;
    console.log(x);
    var x;
    console.log(x);
    var x = 2;
    console.log(x);
}

a2();

function a3 () {
    var x;
    var x;
    var x;

    x = 1;
    console.log(x);
    console.log(x);
    x = 2;
    console.log(x);
}

a3(1);