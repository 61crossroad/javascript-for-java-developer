function foo() {
    // "use strict"; // TypeError: Cannot read property 'a' of undefined
    // console.log(this.a);
    console.log(a);
}
var a = 2;
// foo();
(function() {
    "use strict";
    foo();
})();
