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
var Student = /** @class */ (function () {
    function Student() {
        this.studentId = 101;
        this.studentName = "Latha";
        this.marks = 516;
    }
    Student.prototype.display = function () {
        console.log("Student.display :: ");
        console.log(this.studentId);
        console.log(this.studentName);
        console.log(this.marks);
    };
    return Student;
}());
var EngineeringStudent = /** @class */ (function (_super) {
    __extends(EngineeringStudent, _super);
    function EngineeringStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EngineeringStudent.prototype.display = function () {
        console.log("EngineeringStudent.display :: ");
        console.log(this.studentId);
        // console.log(this.studentName); //It is private and only accessible within class 'Student'
        console.log(this.marks);
    };
    return EngineeringStudent;
}(Student));
var Test = /** @class */ (function () {
    function Test() {
    }
    Test.prototype.sampleMethod = function () {
        var student = new Student();
        student.display();
        var engStudent = new EngineeringStudent();
        engStudent.display();
        console.log("Test.sampleMethod :: ");
        console.log(student.studentId);
        //  console.log(student.studentName); //It is private and only accessible within class 'Student'
        //  console.log(student.marks); //It is protected and only accessible within class 'Student' and its subclasses.
    };
    return Test;
}());
var test = new Test();
test.sampleMethod();
var X = /** @class */ (function () {
    function X() {
    }
    return X;
}());
var Y = /** @class */ (function () {
    function Y() {
    }
    return Y;
}());
var ITest = /** @class */ (function () {
    function ITest() {
    }
    return ITest;
}());
