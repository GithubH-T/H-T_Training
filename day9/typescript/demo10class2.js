var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.disp = function () {
        console.log("Function displays engine is:  " + this.engine);
    };
    return Car;
}());
var obj = new Car("JAZZ");
console.log("Reading attribute value engine as:  " + obj.engine);
obj.disp();
