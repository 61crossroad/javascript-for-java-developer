var obj = {
    logThis: function () {
        console.log(this);
    },
    logThisLater1: function () {
        console.log(this);
        setTimeout(this.logThis, 500); // setTime called logThis
    },
    logThisLater2: function () {
        setTimeout(this.logThis.bind(this), 1000);
    }
};
obj.logThisLater1();
obj.logThisLater2();