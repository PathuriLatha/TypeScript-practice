function add(a, b) {
    return a + b;
}
console.log("Addition of two numbers :: " + add(10, 20));
console.log("concating of two strings :: " + add("Latha", "Pathuri"));
/*  function overloading in a class  */
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.details = function (arg) {
        if (typeof (arg) === 'number') {
            return arg.toString();
        }
        if (typeof (arg) === 'string') {
            return arg.length;
        }
        return arg;
    };
    return Person;
}());
var person = new Person();
console.log("Result: " + person.details(101));
console.log("Length of String: " + person.details("Employee"));
console.log("details('Employee') :: " + person.details("Employee"));
console.log("details(102) :: " + person.details(102));
function display(a) {
    return a;
}
console.log(display(12));
console.log(display("display"));
