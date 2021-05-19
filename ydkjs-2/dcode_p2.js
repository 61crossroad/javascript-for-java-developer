var sleep = (time) => {
    var stime = Date.now();
    var etime = stime + time;

    console.log('start sleep: ', time);

    while (true) {
        if (etime < Date.now()) {
            console.log('end sleep: ', time);
            return;
        }
    }
};

setTimeout(() => sleep(10000));
setTimeout(() => sleep(20000));
