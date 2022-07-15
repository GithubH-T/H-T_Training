//Putting them together

// class Car {
//     engine:string

//     constructor(engine:string) {
//         this.engine=engine

//     }
//     disp():void {
//         console.log("Function displays engine is:  "+this.engine)
//     }
// }

// let obj = new Car("JAZZ")
// console.log("Reading attribute value engine as:  "+obj.engine)

// obj.disp()

//Class Inheritance

// class Shape {
//     Area:Number

//     constructor(area:number) {
//         this.Area=area
//     }
// }
// class Circle extends Shape {
//     disp():void {
//         console.log("Area of circle:  "+this.Area)
//     }
// }
// let obj = new Circle(24)
// obj.disp();


//Class Inheritance and Method Overriding

class PrinterClass {
    disp():void {
        console.log("disp from Parent class")
    }
}
class StringPrinter extends PrinterClass {
    disp():void {
        super.disp()    //super keyword:used to refer to the immediate parent of a class. Used to refer to the super class version of a variable, property or method
        console.log("disp from child")
    }
}
var obj = new StringPrinter()
obj.disp();