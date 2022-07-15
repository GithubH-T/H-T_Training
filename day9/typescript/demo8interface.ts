//Interface
// interface IPerson {
//    firstName: string,
//    lastName: string,
//    sayHi: () => string
// }

// let customer: IPerson = {
//    firstName: "Tom",
//    lastName: "Hanks",
//    sayHi: (): string => { return 1 }
// }

// console.log("Customer Object ")
// console.log(customer.firstName)
// console.log(customer.lastName)
// console.log(customer.sayHi())

//Simple Interface Inherit

interface Person {
   age:number
}
interface Musician extends Person {
   instrument:string
}
let drummer=<Musician>{};
drummer.age=27
drummer.instrument="Drums"
console.log("Age: "+drummer.age)
console.log("Instrument:"+drummer.instrument)