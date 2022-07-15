let global_num = 12;                                //global variable 
let Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13;                          //class variable 
    }
    Numbers.prototype.storeNum = function () {
        let local_num = 14;                         //local variable 
    };
    Numbers.sval = 10;                              //static field 
    return Numbers;
}());
console.log("Global num: " + global_num);
console.log(Numbers.sval);                          //static variable  
let obj = new Numbers();
console.log("Global num: " + obj.num_val);
