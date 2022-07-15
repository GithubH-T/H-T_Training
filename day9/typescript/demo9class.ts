// class Car { 
//     engine:string; 
   
//     constructor(engine:string) {        
//        this.engine = engine 
//     }  
  
//     disp():void { 
//        console.log("Engine is  :   "+this.engine) 
//     } 
//  }

 // Exercise

 class Account { 
    amount:number; 
    name:string;
    date:Date
   
    constructor(amount:number) {        
       this.amount = amount;
    //    this.name = name 
    //    this.date = date 
    }  
 }
    const account1: Account = new Account(100);
    console.log(account1.amount);  

    // disp():void { 
    //    console.log("Amount is  :   "+this.amount) 
    //    console.log("Name is  :   "+this.name)
    //    console.log("Date is  :   "+this.date)
    // } 
