var mammal = function (spec) {
    // kinds of instance
    var that = {};

    // methods for private(spec's) properties
    that.get_name = function () {
        return spec.name;
    };

    that.says = function () {
        return spec.saying || '';
    };

    return that;
};

var myMammal = mammal({ name: 'Herb' });
console.log(myMammal.name); // undefined
console.log(myMammal.get_name());

var cat = function (spec) {
    // additional properties
    spec.saying = spec.saying || 'meow';

    // super object
    var that = mammal(spec);

    // additional methods
    that.purr = function (n) {
        var i, s = '';
        for (i = 0; i < n; i++) {
            if (s) {
                s += '-';
            }
            s += 'r';
        }
        return s;
    };

    that.get_name = function () {
        return that.says() + ' ' + spec.name + ' ' + that.says();
    }

    return that;
}
var myCat = cat({ name: 'Henrietta', saying: 'Grrrr' });
console.log(myCat.says());
console.log(myCat.purr(6));


Object.prototype.superior = function (name) {
    var that = this,
        method = that[name];
    return function () {
        return method.apply(that, arguments);
    }
}


var coolcat = function (spec) {
    var that = cat(spec),
        super_get_name = that.superior('get_name');

    that.get_name = function () {
        return 'like ' + super_get_name() + ' baby';
    };

    return that;
};

var myCoolCat = coolcat({ name: 'Bix' });
console.log(myCoolCat.get_name());
