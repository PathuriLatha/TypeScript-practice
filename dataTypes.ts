let x: number = 10;
let y: number = 20;
let sum: number = x+y;
console.log(sum);

class Addition {
  x: number;
  y: number;
  /*let x: number;
    let y: number; */
  constructor(x: number, y: number){
    this.x = x;
    this.y = y;
  }
  sum(): number{
    return this.x + this.y;
  }
}
let add = new Addition(12, 13);
console.log(add.sum());

/* function myFunction(){
  console.log("using with function keyword");
}
let arrowFunction = () => console.log("using with arrow function");*/

function myFunction(){
  let x: number = 10;
  let y: number = 20;
  console.log("myFunction :: "+(x+y));
}

let arrowFunction = () => {
  let name: string = "latha";
  let address: string = "Hyderabad";
  console.log(`arrowFunction :: ${name} ${address}`);
};

myFunction();
arrowFunction();

/*arrow function uses the value of this in the surrounding code block. It doesn’t care what calls it, it just cares where it was defined*/
let obj = {
  name: "Latha",
  myFun: function(){
    // console.log(name); //Runtime Error - ReferenceError: name is not defined
    console.log(this.name);
    setTimeout(function(){
      console.log(`from setTimeout with function :: ${this.name}`); //it's undefined
    }, 2000);
    setTimeout(() => {
      console.log(`from setTimeout with arrowFunction :: ${this.name}`);
    }, 2000);
  },

  arrowFun: () => {
    console.log(`from arrowFunction :: ${this.name}`); //it's undefined ***
  }
}

obj.myFun();
obj.arrowFun();

let Person = function(name: string, qualification: string) {
  this.name = name;
  this.qualification = qualification;
}
Person.prototype.hello = function() {
  console.log('Hi, my name is ' + this.name)
}
Person.prototype.details = () => {
  console.log(`details :: ${this.name} ${this.qualification}`);
}
let person1 = new Person("Srivani", "MBA");
person1.hello() // Hi, my name is Srivani
person1.details(); // undefined undefined ***
