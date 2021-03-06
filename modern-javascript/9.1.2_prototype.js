function Circle(center, radius) {
    this.center = center;
    this.radius = radius;
}
console.log(Circle.prototype);

Circle.prototype.area = function() {
    return Math.PI * this.radius * this.radius;
}
console.log(Circle.prototype);

var c1 = new Circle({x: 0, y: 0}, 2.0);
var c2 = new Circle({x: 0, y: 1}, 3.0);
var c3 = new Circle({x: 1, y: 0}, 1.0);
console.log("넓이: " + c1.area());
