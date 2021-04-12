function workout() {
    goToGym();
    var goToGym = function() {
        console.log('Workout in Gym A');
    }
    return;
    function goToGym() {
        console.log('Workout in Gym B');
    }
}
workout();