function memorize(f) {
    var cache = {};
    return function() {
        var key = "";
        for (var i = 0; i < arguments.length; i++) key += arguments[i] + ",";
        if (cache[key] == undefined) cache[key] = f.apply(null, arguments);
        console.log(key + " : " + cache[key]);
        return cache[key];
    }
}