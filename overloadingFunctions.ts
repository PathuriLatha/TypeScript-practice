function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any{
  return a+b;
}

console.log(`Addition of two numbers :: ${add(10, 20)}`);
console.log(`concating of two strings :: ${add("Latha", "Pathuri")}`);

/*  function overloading in a class  */
class Person{
  public details(s: string): number;
  public details(n: number): string;
  public details(s: string): string;
  public details(n: number): number;
  public details(arg: any){
    if(typeof(arg) === 'number'){
      return arg.toString();
    }
    if(typeof(arg) === 'string'){
      return arg.length;
    }
    return arg;
  }
}
let person = new Person();
console.log("Result: " +person.details(101));
console.log("Length of String: " +person.details("Employee"));
console.log("details('Employee') :: "+person.details("Employee"));
console.log("details(102) :: "+person.details(102));

function display(n1: number): number ;
function display(str: string): string ;
function display(a: any): any{
  return a;
}
console.log( display(12) );
console.log( display("display") );

/* function testing(n: number): void{
  console.log(n);
}
function testing(s: string): void{
  console.log(s);
}
//Duplicate function implementation
*/
