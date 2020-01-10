var students = [
    { name: "Shirisha", age: 29 },
    { name: "Bhargavi", age: 26 },
    { name: "Lasya", age: 10 }
];
var teachers = [
    { name: "Harikrishna", subject: "CoreJava" },
    { name: "Nataraz", subject: "Spring" },
    { name: "Murali", subject: "Oracle" }
];
/* function getBy(model: Student[], prop: string, value): Student | null {
    return model.filter(item => item[prop] === value)[0] || null;
} */
/* function getBy<T>(model: T[], prop: string, value): T | null {
  return model.filter(item => item[prop] === value) [0] || null ;
}
let result = getBy(students, "address", "Bhargavi");
*/
/* function getBy<T, P extends keyof T>(model: T[], prop: P, value): T | null {
  return model.filter(item => item[prop] === value) [0] || null;
}
*/
function getBy(model, prop, value) {
    return model.filter(function (item) { return item[prop] === value; })[0] || null;
}
//let result = getBy(students, "address", "Bhargavi"); // It' getting error address is not assignable to parameter of type 'name' or 'age'
//let result = getBy(students, "age", "10");// argument of "10" is not assignable to parameter of type 'number'
var result = getBy(students, "name", "Bhargavi");
var anotherResult = getBy(teachers, "subject", "Spring");
console.log(result);
console.log(anotherResult);
var student = {
    typeOfPerson: "Student",
    name: "Latha"
};
console.log(student);
Array.prototype.getBy = function (prop, value) {
    return this.filter(function (item) { return item[prop] === value; })[0] || null;
};
var testing1 = students.getBy("name", "Bhargavi");
console.log(testing1);
var testing2 = teachers.getBy("subject", "Oracle");
console.log(testing2);
