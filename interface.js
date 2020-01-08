function Details(person) {
    console.log("name :: " + person.name);
    console.log("typeOfPerson :: " + person.typeOfPerson);
}
var student = {
    name: "Lasya",
    typeOfPerson: "Student"
};
var employee = {
    name: "Rama",
    typeOfPerson: "Employee"
};
Details(student);
Details(employee);
function createSquare(squareBox) {
    var newSquare = {
        color: "Blue",
        area: 100
    };
    if (squareBox.color) {
        newSquare.color = squareBox.color;
    }
    if (squareBox.width) {
        newSquare.area = squareBox.width * squareBox.width;
    }
    return newSquare;
}
var greenSquare = createSquare({
    color: "Green"
});
var pinkSquare = createSquare({
    color: "pink"
});
/*
let mySquare = createSquare(
  {
    colour: "red",
    width: 100
  }
);
 */
var mySquare = createSquare({
    width: 100,
    opacity: 0.5
});
console.log(mySquare);
console.log(greenSquare);
console.log(pinkSquare);
var readonlyVariable = { x: 10, y: 20 };
// readonlyVariable.x = 5; //Cannot assign to 'x' because it is a read-only property
console.log(readonlyVariable);
var numbers = [1, 2, 3, 4, 5, 6];
var readonlyArray = numbers;
/*
readonlyArray[0] = 12; // Index signature in type 'ReadonlyArray<number>' only permits reading.
readonlyArray.push(5); // Property 'push' does not exist on type 'ReadonlyArray<number>'
readonlyArray.length = 100; // Cannot assign to 'length' because it is a read-only property.
numbers = readonlyArray; //Type 'ReadonlyArray<number>' is missing the following properties from type 'number[]'
 */
numbers = readonlyArray;
console.log(numbers);
/* let mySearch: SearchFun = function(source: string, subString: string){
  let result = source.search(subString);
  return result > -1;
} */
var mySearch = function (src, subStr) {
    var result = src.search(subStr);
    return result > -1;
};
console.log(mySearch("Latha", "L"));
var myArray;
myArray = ["latha", "rama"];
var myStr = myArray[0];
console.log(myStr);
var array = [1, 2, 3, 4, 5, 6, 7, 8];
array.forEach(function (value) {
    console.log(value);
});
