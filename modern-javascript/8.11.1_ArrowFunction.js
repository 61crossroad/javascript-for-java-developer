var obj = {
    name: "myObj",
    say: function() {
        console.log(this); // obj: {say: f}

        var f = function() { console.log(this); }; // Object, Window
        f();

        var g = () => console.log(this); // obj: {say: f}
        g();
    }
};
obj.say();
// this means the OBJECT that function is binded...?

var f = function() {
    console.log(this);
    console.log(this.name);
};
var g = () => {
    console.log(this);
    console.log(this.name);
};
var tom = { name: "Tom" };
f.call(tom);
g.call(tom);
