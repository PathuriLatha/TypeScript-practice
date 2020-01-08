interface Person{
  name: string;
  typeOfPerson: string;
}
function Details(person : Person){
  console.log("name :: "+person.name);
  console.log("typeOfPerson :: "+person.typeOfPerson);
}
const student: Person = {
  name: "Lasya",
  typeOfPerson: "Student"
}
const employee: Person = {
  name: "Rama",
  typeOfPerson: "Employee"
}
Details(student);
Details(employee);

interface SquareBox{
  color?: string;
  width?: number;
}
function createSquare(squareBox: SquareBox): {color: string, area: number}{
  let newSquare = {
    color: "Blue",
    area: 100
  };
  if(squareBox.color){
    newSquare.color = squareBox.color;
  }
  if(squareBox.width){
    newSquare.area = squareBox.width * squareBox.width;
  }
  return newSquare;
}

let greenSquare = createSquare(
  {
    color: "Green"
  }
);
let pinkSquare = createSquare(
  {
    color: "pink"
  }
);
/*
let mySquare = createSquare(
  {
    colour: "red",
    width: 100
  }
);
 */
 let mySquare = createSquare(
  {
    width: 100,
    opacity: 0.5
  } as SquareBox
 );
console.log(mySquare);
console.log(greenSquare);
console.log(pinkSquare);

interface ReadonlyInterface{
  readonly x: number;
  readonly y: number;
}
let readonlyVariable: ReadonlyInterface = { x: 10, y: 20 };
// readonlyVariable.x = 5; //Cannot assign to 'x' because it is a read-only property
console.log(readonlyVariable);


let numbers: number[] = [1, 2, 3, 4, 5, 6];
let readonlyArray: ReadonlyArray<number> = numbers;
/*
readonlyArray[0] = 12; // Index signature in type 'ReadonlyArray<number>' only permits reading.
readonlyArray.push(5); // Property 'push' does not exist on type 'ReadonlyArray<number>'
readonlyArray.length = 100; // Cannot assign to 'length' because it is a read-only property.
numbers = readonlyArray; //Type 'ReadonlyArray<number>' is missing the following properties from type 'number[]'
 */
numbers = readonlyArray as number[];
console.log(numbers);

interface SearchFun{
  (source: string, subString: string): boolean;
}
/* let mySearch: SearchFun = function(source: string, subString: string){
  let result = source.search(subString);
  return result > -1;
} */
let mySearch: SearchFun = function(src: string, subStr: string){
  let result = src.search(subStr);
  return result > -1;
}
console.log(mySearch("Latha", "L"));

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["latha", "rama"];

let myStr: string = myArray[0];
console.log(myStr);

