// class Car { 
//     engine:string; 
//     constructor(engine:string) {        
//        this.engine = engine 
//     }  
//     disp():void { 
//        console.log("Engine is  :   "+this.engine) 
//     } 
//  }
// 
var Account = /** @class */ (function () {
    function Account(amount) {
        this.amount = amount;
        //    this.name = name 
        //    this.date = date 
    }
    return Account;
}());
var account1 = new Account(100);
console.log(account1.amount);
// disp():void { 
//    console.log("Amount is  :   "+this.amount) 
//    console.log("Name is  :   "+this.name)
//    console.log("Date is  :   "+this.date)
// } 
