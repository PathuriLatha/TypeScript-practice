
let names: string | null;
names = "Latha";
names = null;
//names = undefined;

let age: number;
age = 24;
//age = null;
//age = undefined;


let isMarried: boolean;
isMarried = false;
isMarried = true;
//isMarried = null;
//isMarried = undefined;

//console.log(name+" "+age+" "+isMarried);
console.log(isMarried+" "+age+" "+names);
type User = {
  firstName: string;
  lastName?: string | undefined;
};

let user1: User = { firstName: "Latha", lastName: undefined };
let user2: User = { firstName: "Bhargavi", lastName: "Jillela" };
let user3: User = { firstName: "Lasya" };
console.log(user1);
console.log(user2);
console.log(user3);

/* function getLength(s: string | null) {
//   return s.length; //Object is possibly 'null'
  if(s == null){
    return 0;
  }
  else{
    return s.length;
  }
} */

function getLength(s: string | null) {
  return s ? s.length : 0;
}

console.log("getLength(null) :: "+getLength(null));
console.log("getLength(string) :: "+getLength("LasyaLatha"));

function invocation(callback?: () => void){
  // callback(); //Cannot invoke an object which is possibly 'undefined'.
  /* if(callback){
    callback();
  } */
  if(typeof callback === "function"){
    callback();
  }
}

let invocationCallback = function(){
  console.log("invocationCallback");
}
invocation(invocationCallback);

let command : string | string[];
command = "Latha";
console.log(command.toUpperCase());
command = ["Latha", "Rama"];
console.log(command.join(" "));

function composeCommand( command: string | string[] ): string{
  if(typeof command === "string"){
    return command;
  }
  return command.join(" ");
}

console.log("command with string :: "+composeCommand("composeCommand"));
console.log("command with string array :: "+composeCommand(["composed", "command"]));

type Person = {
  firstName: string;
  lastName: string | null | undefined;
};

function getFullName(person: Person): string{
  const { firstName, lastName } = person;
  if(!lastName){
    return firstName;
  }
  return `${firstName} ${lastName}`;
}
let user: Person = {
  firstName : "Latha",
  lastName : undefined
}
console.log(getFullName(user));

interface Cash {
  kind: "cash";
}

interface PayPal {
  kind: "paypal";
  email: string;
}

interface CreditCard {
  kind: "credit";
  cardNumber: string;
  securityCode: string;
}

type PaymentMethod = Cash | PayPal | CreditCard;

function describePaymentMethod(method: PaymentMethod){
  switch(method.kind){
    case "cash" : return "Cash";
    case "paypal" : return `PayPal (${method.email})`;
    case "credit" : return `CreditCard (${method.cardNumber})`;
  }
  /* if(method.kind === "cash"){
    return "Cash";
  }
  if(method === "paypal"){
    return `PayPal (${method.email})`;
  }
  return `CreditCard (${method.cardNumber})`; */
}

let cash: Cash = {
  kind: "cash"
}
let paypal: PayPal = {
  kind: "paypal",
  email: "lasyalatha411@gmail.com"
}
let creditCard: CreditCard = {
  kind: "credit",
  cardNumber: "9876543210",
  securityCode: "8004"
}

console.log("cash :: "+describePaymentMethod(cash));
console.log("paypal :: "+describePaymentMethod(paypal));
console.log("credit :: "+describePaymentMethod(creditCard));

interface Todo {
  readonly text: string;
  readonly done: boolean;
}
interface AddTodo {
  type: "ADD_TODO";
  text: string;
}
interface ToggleTodo {
  type: "TOGGLE_TODO";
  index: number;
}
type ReduxAction = AddTodo | ToggleTodo;

function todoReducer(
  state : ReadonlyArray<Todo> = [],
  action : ReduxAction
): ReadonlyArray<Todo> {
  switch(action.type){
    case "ADD_TODO" :
      return [...state, {text: action.text, done: false}];
    case "TOGGLE_TODO" :
      return state.map( (todo, index) => {
        if(index !== action.index){
          return todo;
        }
        return{
          text : todo.text,
          done : !todo.done
        };
      });
    default :
      return state;
  }
}
/*
let todo : Todo = {

} */
let addTodo: AddTodo = {
  type: "ADD_TODO",
  text: "AddTodo Text"
}
let toggleTodo: ToggleTodo = {
  type: "TOGGLE_TODO",
  index: 101
}

/* console.log(todoReducer(addTodo, "ReduxAction"));
console.log(todoReducer(toggleTodo, "ReduxAction")); */

const sing = function() {
  while (true) {
    console.log("Never gonna give you up");
    console.log("Never gonna let you down");
    console.log("Never gonna run around and desert you");
    console.log("Never gonna make you cry");
    console.log("Never gonna say goodbye");
    console.log("Never gonna tell a lie and hurt you");
  }
};
// sing();
const failwith = (message: string) => {
  throw new Error(message);
};
// failwith("Hello");

/*
function prop(obj: {}, key: string) {
  return obj[key]; // Element implicitly has an 'any' type because type '{}' has no index signature.
}
 */

interface KeyOfTodo{
  quantity: number;
  content: string;
  date: Date;
}

type TodoKeys = keyof KeyOfTodo;
function prop<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
const propVariable = {
  quantity: 1,
  content: "Milk",
  date: new Date()
}
const quantity = prop(propVariable, "quantity");
const content = prop(propVariable, "content");
const date = prop(propVariable, "date");
console.log("quantity :: "+quantity);
console.log("content :: "+content);
console.log("date :: "+date);

interface ObjectConstrutor{
  entries<T extends { [key: string]: any }, K extends keyof T>(o: T): [keyof T, T[K]][];
}

interface Point{
  x: number;
  y: number;
}
interface FrozenPoint{
  readonly x: number;
  readonly y: number;
}
function freezePoint(p: Point): FrozenPoint{
  return Object.freeze(p);
}
/*
const origin = freezePoint({x: 0, y: 0});
//console.log("origin :: "+origin);
origin.x = 42;
 */
