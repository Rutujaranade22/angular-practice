import { Component } from '@angular/core';

@Component({
  selector: 'app-typescript',
  imports: [],
  templateUrl: './typescript.html',
  styleUrl: './typescript.css'
})
export class Typescript {
//Step 1: Properties (Variables Defined)
  name: string = "Typescript";
rollNo: number = 90;
isActive: boolean = true;
date: Date = new Date();
city: string;
//Step 2: Object Property
person:any={
  pId:1,
  pName:"Rutuja",
  pCity:"Sinnar"
};


//Step 3: Constructor
constructor() {
  this.city = "Sinnar";
  this.displayDate();
  this.callFunction();
  this.objectAccess();
  this.arrayAccess();
}
// Step 4: Array Declaration
cityArray: any[] = ["Pune", "Mumbai", "Solapur"];

// Step 5: Methods (Functions Defined)
displayDate() {
  console.log("Display Function working");
  console.log(this.date);
}
//callFunction()
callFunction() {
  console.log("Call Function Executed...");
  this.displayDate();
}
// objectAccess()
objectAccess() {
  console.log("Person Name :" + this.person.pName);
}
//arrayAccess()
arrayAccess() {
  console.log("The City names are :" + this.cityArray[0] + ", " + this.cityArray[1]);

  for (let index = 0; index < this.cityArray.length; index++) {
    const element = this.cityArray[index];
    console.log(element);
  }
}


}
