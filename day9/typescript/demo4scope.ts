let global_num = 12          //global variable; can be accessed from anywhere within your code. 
class Numbers { 
   num_val = 13;             //class variable; also called fields. Fields can also be static. 
   static sval = 10;         //static field; Static fields can be accessed using the class name.
   
   storeNum():void { 
      let local_num = 14;    //local variable; accessible only within the construct where they are declared. 
   } 
} 
console.log("Global num: "+global_num)  
console.log(Numbers.sval)   //static variable  
let obj = new Numbers(); 
console.log("Global num: "+obj.num_val) 