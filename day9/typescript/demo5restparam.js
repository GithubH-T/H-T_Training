function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("sum of the numbers", sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
//Lambda function (just like arrow function)
var foo = function (x) { return 10 + x; }; //return statement is implicit
//OR
// let foo = (x: number) => {                   //mentioned return
//     return 100 + x;
// }
// //OR
// const foo = function (x: number) {           //mentioned return
//     return 100 + x;
// }
console.log(foo(100));
