function bookHotel(city) {
    var availableHotel = 'None';
    for (var i = 0; i < hotels.length; i++) {
        var hotel = hotels[i];
        if (hotel.city === city && hotel.hasRoom) {
            availableHotel = hotel.name;
            break;
        }
    }
    // You can access i & hotel
    console.log('Checked ' + (i + 1) + ' record(s)');
    console.log('Last checked ' + hotel.name);
    {
        function placeOrder() {
            var totalAmount = 200;
            console.log('Order placed to ' + availableHotel);
        }
    }
    placeOrder();
    // access is denied
    // console.log(totalAmount);
    return availableHotel;
}
var hotels = [{ name: 'Hotel A', hasRoom: false, city: 'Sanya'},
{ name: 'Hotel B', hasRoom: true, city: 'Sanya'}];
console.log(bookHotel('Sanya')); // Hotel B
// access is denied
// console.log(availableHotel);