var mammal = function (spec) {
    var that = {};

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
