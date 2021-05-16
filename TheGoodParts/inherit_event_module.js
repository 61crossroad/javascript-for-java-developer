var eventuality = function (that) {
    var registry = {}; // CLOSURE! only methods can access registry LOL
    // console.log(this); // Window

    that.fire = function (event) {
        // console.log(this); // DOM element
        // console.log(event); event object, ex) e.preventDefault(); LOL
        var array,
            func,
            handler,
            i,
            type = typeof event === 'string' ? event : event.type;
        
        if (registry.hasOwnProperty(type)) {
            array = registry[type];
            for (i = 0; i < array.length; i++) {
                handler = array[i];
                func = handler.method;
                if (typeof func === 'string') {
                    func = this[func];
                }

                func.apply(this, handler.prameters || [event]);
            }
        }
        return this;
    };

    that.on = function (type, method, parameters) {
        // console.log(this); // DOM element
        var handler = {
            method: method,
            parameters: parameters
        };
        if (registry.hasOwnProperty(type)) {
            registry[type].push(handler);
        } else {
            registry[type] = [handler];
        }
        return this;
    };

    return that;
};
