function printName() {
    var inner1 = () => console.log("inner1(): ", this.name, name);
    var inner2 = function() {
        console.log("inner2(): ", this.name, name);
    };

    function print() {
        inner1();
        inner2();
    }
    console.log(this);
    console.log(name);
    var name = 'C';
    print();
    name = 'D';

    return print;
}

name = 'B';
console.log("== call method ==");
({name: 'A', fnc: printName}.fnc())();
console.log("== call function ==");
(printName())();
