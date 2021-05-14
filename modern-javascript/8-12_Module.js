var Module = Module || {};
console.log(Module);

(function(_Module) {
    var name = "NoName";
    function getName() {
        return name;
    }
    _Module.showName = function() {
        console.log(getName());
    };
    _Module.setName = function(x) {
        name = x;
    };
})(Module);

Module.setName("Tom");
Module.showName();
// console.log(Module.getName());