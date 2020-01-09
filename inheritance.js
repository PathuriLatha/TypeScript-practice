var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(a, b) {
        this.name = a;
        this.address = b;
    }
    Person.prototype.getDetails = function () {
        return this.name + ", " + this.address;
    };
    return Person;
}());
var Car = /** @class */ (function () {
    function Car(c, d) {
        this.brandName = c;
        this.color = d;
    }
    Car.prototype.getDetails = function () {
        return this.brandName + ", " + this.color;
    };
    return Car;
}());
/*   Hybrid Inheritance: One parent class with one child class   TypeScript does not support hybrid inheritance */
/*   Single Inheritance: One parent class with one child class  */
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(p, q, r, s) {
        var _this = _super.call(this, p, q) || this;
        _this.studentId = r;
        _this.marks = s;
        return _this;
    }
    Student.prototype.getDetails = function () {
        return this.name + ", " + this.address + ", " + this.studentId + ", " + this.marks;
    };
    return Student;
}(Person));
var empObject = {};
empObject.name = "Bhargavi";
empObject.age = 26;
empObject.gender = "Female";
empObject.empCode = 43;
console.log("Name: " + empObject.name);
console.log("Employee Code: " + empObject.empCode);
var EmployeeClass = /** @class */ (function () {
    function EmployeeClass() {
        this.name = "Shirisha";
        this.age = 29;
        this.gender = "Female";
        this.empCode = 1990;
    }
    return EmployeeClass;
}());
var empClass = new EmployeeClass();
console.log(empClass.name + ", " + empClass.age + ", " + empClass.gender + ", " + empClass.empCode);
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
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(a, b, c, d) {
        var _this = _super.call(this, a, b) || this;
        _this.salary = c;
        _this.experience = d;
        return _this;
    }
    Employee.prototype.getDetails = function () {
        return this.name + ", " + this.address + ", " + this.salary + ", " + this.experience;
    };
    return Employee;
}(Person));
var person = new Person("Latha", "hyderabad");
console.log(person.getDetails());
var student = new Student("Rama", "Sircilla", 427, 529);
console.log(student.getDetails());
var employee = new Employee("Bhargavi", "Hyderabad", 20000, "2years");
console.log(employee.getDetails());
/*   Multi-Level Inheritance: One parent class with one child class and the child class has another child class   */
var Wheels = /** @class */ (function () {
    function Wheels(a, b) {
        this.wheels = a;
        this.vehicle = b;
    }
    Wheels.prototype.getWheels = function () {
        return this.wheels + " wheels, " + this.vehicle;
    };
    return Wheels;
}());
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.color = z;
        return _this;
    }
    Bike.prototype.getBikeDetails = function () {
        return this.wheels + " wheels, " + this.vehicle + ", " + this.color + " color";
    };
    return Bike;
}(Wheels));
var Persons = /** @class */ (function (_super) {
    __extends(Persons, _super);
    function Persons(w, x, y, z) {
        var _this = _super.call(this, w, x, y) || this;
        _this.noOfPersons = z;
        return _this;
    }
    Persons.prototype.getPersons = function () {
        return this.wheels + " wheels, " + this.vehicle + ", " + this.color + " color, " + this.noOfPersons + " persons";
    };
    return Persons;
}(Bike));
var wheels = new Wheels(4, "Car");
console.log(wheels.getWheels());
var bike = new Bike(2, "Bike", "Blue");
console.log(bike.getBikeDetails());
var persons = new Persons(3, "auto", "Yellow", 3);
console.log(persons.getPersons());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.animal = function () {
        console.log("Animal");
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.dog = function () {
        console.log("Dog");
    };
    return Dog;
}(Animal));
var BabyDog = /** @class */ (function (_super) {
    __extends(BabyDog, _super);
    function BabyDog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BabyDog.prototype.babyDog = function () {
        console.log("Baby Dog");
    };
    return BabyDog;
}(Dog));
var obj = new BabyDog();
obj.animal();
obj.dog();
obj.babyDog();
