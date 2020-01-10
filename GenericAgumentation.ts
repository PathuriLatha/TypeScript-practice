type Student = {
  name: string;
  age: number;
};
type Teacher = {
  name: string;
  subject: string;
}
const students: Student[] = [
  { name: "Shirisha", age: 29},
  { name: "Bhargavi", age: 26},
  { name: "Lasya", age: 10}
];
const teachers: Teacher[] = [
  {name: "Harikrishna", subject: "CoreJava"},
  {name: "Nataraz", subject: "Spring"},
  {name: "Murali", subject: "Oracle"}
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


function getBy<T, P extends keyof T>(model: T[], prop: P, value: T[P]): T | null {
  return model.filter(item => item[prop] === value) [0] || null;
}

//let result = getBy(students, "address", "Bhargavi"); // It' getting error address is not assignable to parameter of type 'name' or 'age'
//let result = getBy(students, "age", "10");// argument of "10" is not assignable to parameter of type 'number'

let result = getBy(students, "name", "Bhargavi");
let anotherResult = getBy(teachers, "subject", "Spring");
console.log(result);
console.log(anotherResult);


/* Array.prototype.getBy = function<T, P extends keyof T> (
  this: T[],
  prop: P,
  value: T[P]
): T | null {
  return this.filter(item => item[prop] === value) [0] || null;
} */
// Property 'getBy' does not exist on type 'any[]'.

/* let testStudent = students.getBy("name", "Shirisha");// Property 'getBy' does not exist on type 'Student[]'.
console.log(testStudent); */
/* let testTeacher = (teachers as any).getBy("subject", "CoreJava");
console.log(testTeacher); */

interface Person{
  typeOfPerson: string;
  //qualification: string;
}
interface Person{
  name: string;
  //qualification: string;
}
let student: Person = {
  typeOfPerson: "Student",
  name: "Latha"
}
console.log(student);
interface Array<T> {
   getBy<P extends keyof T>(prop: P, value: T[P]): T | null;
}

Array.prototype.getBy = function <T, P extends keyof T>(
    this: T[],
    prop: P,
    value: T[P]
): T | null {
  return this.filter(item => item[prop] === value)[0] || null;
};

let testing1 = students.getBy("name", "Bhargavi");
console.log(testing1);

const testing2 = (teachers as any).getBy("subject", "Oracle");
console.log(testing2);

