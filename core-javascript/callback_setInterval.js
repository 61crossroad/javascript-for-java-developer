var count = 0;
var timer = setInterval(function() {
    console.log(count);
    if (++count > 4) clearInterval(timer);
}, 300);

var count2 = 4;
var cbFunc = function() {
    console.log(count2);
    if (--count2 < 0) clearInterval(timer2);
};
var timer2 = setInterval(cbFunc, 300);
