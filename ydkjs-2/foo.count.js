function foo(num) {
    console.log("foo: " + num);
    this.count++;
}
foo.count = 0;
var i;
for (i = 0; i < 10; i++) {
    if (i > 5) {
        // foo(i);
        foo.call(foo, i);
    }
}
console.log(foo.count);

function fooData(num) {
    console.log("foo: " + num);
    data.count++;
}
var data = {
    count: 0
};
var i;
for (i = 0; i < 10; i++) {
    if (i > 5) {
        fooData(i);
    }
}
console.log(data.count);

function fooFoo(num) {
    console.log("foo: " + num);
    fooFoo.count++;
}
fooFoo.count = 0;
var i;
for (i = 0; i < 10; i++) {
    if (i > 5) {
        fooFoo(i);
    }
}
console.log(fooFoo.count);
