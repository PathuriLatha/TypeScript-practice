var _this = this;
var x = 10;
var y = 20;
var sum = x + y;
console.log(sum);
var Addition = /** @class */ (function () {
    /*let x: number;
      let y: number; */
    function Addition(x, y) {
        this.x = x;
        this.y = y;
    }
    Addition.prototype.sum = function () {
        return this.x + this.y;
    };
    return Addition;
}());
var add = new Addition(12, 13);
console.log(add.sum());
/* function myFunction(){
  console.log("using with function keyword");
}
let arrowFunction = () => console.log("using with arrow function");*/
function myFunction() {
    var x = 10;
    var y = 20;
    console.log("myFunction :: " + (x + y));
}
var arrowFunction = function () {
    var name = "latha";
    var address = "Hyderabad";
    console.log("arrowFunction :: " + name + " " + address);
};
myFunction();
arrowFunction();
/*arrow function uses the value of this in the surrounding code block. It doesn’t care what calls it, it just cares where it was defined*/
var obj = {
    name: "Latha",
    myFun: function () {
        var _this = this;
        // console.log(name); //Runtime Error - ReferenceError: name is not defined
        console.log(this.name);
        setTimeout(function () {
            console.log("from setTimeout with function :: " + this.name); //it's undefined
        }, 2000);
        setTimeout(function () {
            console.log("from setTimeout with arrowFunction :: " + _this.name);
        }, 2000);
    },
    arrowFun: function () {
        console.log("from arrowFunction :: " + _this.name); //it's undefined ***
    }
};
obj.myFun();
obj.arrowFun();
var Person = function (name, qualification) {
    this.name = name;
    this.qualification = qualification;
};
Person.prototype.hello = function () {
    console.log('Hi, my name is ' + this.name);
};
Person.prototype.details = function () {
    console.log("details :: " + _this.name + " " + _this.qualification);
};
var person1 = new Person("Srivani", "MBA");
person1.hello(); // Hi, my name is Srivani
person1.details(); // undefined undefined ***
