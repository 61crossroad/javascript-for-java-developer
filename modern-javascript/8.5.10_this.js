var tom = {
    name: "Tom",
    sayHello: function() {
        console.log("Hello! " + this.name);
    }
};
tom.sayHello();

// function is not strictly binded with object, object only has reference.
var huck = { name: "Huck" };
huck.sayHello = tom.sayHello;
huck.sayHello();

console.log(this); // node -> {}, browser -> Window

function f() { console.log(this); }
f(); // node -> Object [global], browser -> Window

var a = { name: 'a' };
a.f = f;
a.f(); // this -> a
