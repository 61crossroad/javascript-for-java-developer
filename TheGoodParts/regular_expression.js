var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

var url = "http://www.ora.com:80/goodparts?q#fragment";
var result = parse_url.exec(url);

var names = ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash'];
var blanks = '      ';

var i;
for (i = 0; i < names.length; i++) {
    console.log(names[i] + ':' + blanks.substring(names[i].length), result[i]);
}


var parse_number = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i;

var test = function (num) {
    console.log(parse_number.test(num));
};

test('1');
test('number');
test('98.6');
test('132.21.86.100');
test('123.45E-67');
test('123.45D-67');


var my_regexp = /"(?:\\.|[^\\\"])*"/g;
my_regexp = new RegExp("\"(?:\\.|[^\\\\\\\"])*\"", 'g');

function make_a_matcher() {
    return /a/gi;
}

var x = make_a_matcher();
var y = make_a_matcher();
x.lastIndex = 10;
console.log(y.lastIndex); // 10? 0....??

console.log("into".match(/in|int/));


var doubled_words = /([A-Za-z\u00C0-\u1FFF\u2800-\uFFFD'\-]+)\s+\1/gi;
