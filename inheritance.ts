
class Person{
  name: string;
  address: string;
  constructor(a: string, b: string){
    this.name = a;
    this.address = b;
  }
  getDetails(): string{
    return `${this.name}, ${this.address}`;
  }
}
class Car{
  brandName: string;
  color: string;
  constructor(c: string, d: string){
    this.brandName = c;
    this.color = d;
  }
  getDetails(): string{
    return `${this.brandName}, ${this.color}`;
  }
}
/*   Hybrid Inheritance: One parent class with one child class   TypeScript does not support hybrid inheritance */

/*   Single Inheritance: One parent class with one child class  */
class Student extends Person{
  studentId: number;
  marks: number;
  constructor(p: string, q: string, r: number, s: number){
    super(p, q);
    this.studentId = r;
    this.marks = s;
  }
  getDetails(): string{
    return `${this.name}, ${this.address}, ${this.studentId}, ${this.marks}`;
  }
}


/*   Multiple Inheritance: Multiple parent classes with one child class   */
interface PersonInterface {
   name:string
}
interface PersonDetail {
    age:number
    gender:string
}
interface EmployeeInterface extends PersonInterface, PersonDetail {
    empCode:number
}
let empObject = <EmployeeInterface>{};
empObject.name = "Bhargavi";
empObject.age = 26;
empObject.gender = "Female";
empObject.empCode = 43;
console.log("Name: "+empObject.name);
console.log("Employee Code: "+empObject.empCode);
class EmployeeClass implements PersonInterface, PersonDetail{
  name = "Shirisha";
  age = 29;
  gender = "Female";
  empCode = 1990;
}
let empClass = new EmployeeClass();
console.log(`${empClass.name}, ${empClass.age}, ${empClass.gender}, ${empClass.empCode}`);

/*
class MultipleInheritance extends Person extends Car{
  marks: number;
  price: string;
  constructor(u: string, v: string, w: string, x: string, y: number, z: string){
    super(u, v);
    super(w, x);

    this.marks = y;
    this.price =z;
  }
  getDetails(): string{
    return `${this.name}, ${this.address}, ${this.brandName}, ${this.color}, ${this.marks}. ${this.price}`;
  }
}

let multipleInheritance = new MultipleInheritance("Latha", "Hyderabad", "Ford", "white", 520, "7lacks");
console.log( multipleInheritance.getDetails() );
 */

/*   Hierarchical Inheritance: One parent class with multiple child classes   */
class Employee extends Person{
  salary: number;
  experience: string;
  constructor(a: string, b: string, c: number, d: string){
    super(a, b);
    this.salary = c;
    this.experience = d;
  }
  getDetails(): string{
    return `${this.name}, ${this.address}, ${this.salary}, ${this.experience}`;
  }
}
let person = new Person("Latha", "hyderabad");
console.log(person.getDetails());
let student = new Student("Rama", "Sircilla", 427, 529);
console.log(student.getDetails());
let employee = new Employee("Bhargavi", "Hyderabad", 20000, "2years");
console.log( employee.getDetails() );

/*   Multi-Level Inheritance: One parent class with one child class and the child class has another child class   */
class Wheels{
  wheels: number;
  vehicle: string;
  constructor(a: number, b: string){
    this.wheels = a;
    this.vehicle = b;
  }
  getWheels(): string{
    return `${this.wheels} wheels, ${this.vehicle}`;
  }
}
class Bike extends Wheels{
  color: string;
  constructor(x: number, y: string, z: string){
    super(x, y);
    this.color = z;
  }
  getBikeDetails(): string{
    return `${this.wheels} wheels, ${this.vehicle}, ${this.color} color`;
  }
}
class Persons extends Bike{
  noOfPersons: number;
  constructor(w: number, x: string, y: string, z: number){
    super(w, x, y);
    this.noOfPersons = z;
  }
  getPersons(): string{
    return `${this.wheels} wheels, ${this.vehicle}, ${this.color} color, ${this.noOfPersons} persons`;
  }
}

let wheels = new Wheels(4, "Car");
console.log( wheels.getWheels() );
let bike = new Bike(2, "Bike", "Blue");
console.log(bike.getBikeDetails());
let persons = new Persons(3, "auto", "Yellow", 3);
console.log( persons.getPersons() );


class Animal {
  animal():void {
    console.log("Animal");
  }
}
class Dog extends Animal {
  dog():void {
    console.log("Dog");
  }
}
class BabyDog extends Dog{
  babyDog():void {
    console.log("Baby Dog");
  }
}
let obj = new BabyDog();
obj.animal();
obj.dog();
obj.babyDog();
