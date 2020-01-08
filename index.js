var names;
names = "Latha";
names = null;
//names = undefined;
var age;
age = 24;
//age = null;
//age = undefined;
var isMarried;
isMarried = false;
isMarried = true;
//isMarried = null;
//isMarried = undefined;
//console.log(name+" "+age+" "+isMarried);
console.log(isMarried + " " + age + " " + names);
var user1 = { firstName: "Latha", lastName: undefined };
var user2 = { firstName: "Bhargavi", lastName: "Jillela" };
var user3 = { firstName: "Lasya" };
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
function getLength(s) {
    return s ? s.length : 0;
}
console.log("getLength(null) :: " + getLength(null));
console.log("getLength(string) :: " + getLength("LasyaLatha"));
function invocation(callback) {
    // callback(); //Cannot invoke an object which is possibly 'undefined'.
    /* if(callback){
      callback();
    } */
    if (typeof callback === "function") {
        callback();
    }
}
var invocationCallback = function () {
    console.log("invocationCallback");
};
invocation(invocationCallback);
var command;
command = "Latha";
console.log(command.toUpperCase());
command = ["Latha", "Rama"];
console.log(command.join(" "));
function composeCommand(command) {
    if (typeof command === "string") {
        return command;
    }
    return command.join(" ");
}
console.log("command with string :: " + composeCommand("composeCommand"));
console.log("command with string array :: " + composeCommand(["composed", "command"]));
function getFullName(person) {
    var firstName = person.firstName, lastName = person.lastName;
    if (!lastName) {
        return firstName;
    }
    return firstName + " " + lastName;
}
var user = {
    firstName: "Latha",
    lastName: undefined
};
console.log(getFullName(user));
function describePaymentMethod(method) {
    switch (method.kind) {
        case "cash": return "Cash";
        case "paypal": return "PayPal (" + method.email + ")";
        case "credit": return "CreditCard (" + method.cardNumber + ")";
    }
    /* if(method.kind === "cash"){
      return "Cash";
    }
    if(method === "paypal"){
      return `PayPal (${method.email})`;
    }
    return `CreditCard (${method.cardNumber})`; */
}
var cash = {
    kind: "cash"
};
var paypal = {
    kind: "paypal",
    email: "lasyalatha411@gmail.com"
};
var creditCard = {
    kind: "credit",
    cardNumber: "9876543210",
    securityCode: "8004"
};
console.log("cash :: " + describePaymentMethod(cash));
console.log("paypal :: " + describePaymentMethod(paypal));
console.log("credit :: " + describePaymentMethod(creditCard));
function todoReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case "ADD_TODO":
            return state.concat([{ text: action.text, done: false }]);
        case "TOGGLE_TODO":
            return state.map(function (todo, index) {
                if (index !== action.index) {
                    return todo;
                }
                return {
                    text: todo.text,
                    done: !todo.done
                };
            });
        default:
            return state;
    }
}
/*
let todo : Todo = {

} */
var addTodo = {
    type: "ADD_TODO",
    text: "AddTodo Text"
};
var toggleTodo = {
    type: "TOGGLE_TODO",
    index: 101
};
/* console.log(todoReducer(addTodo, "ReduxAction"));
console.log(todoReducer(toggleTodo, "ReduxAction")); */
var sing = function () {
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
var failwith = function (message) {
    throw new Error(message);
};
function prop(obj, key) {
    return obj[key];
}
var propVariable = {
    quantity: 1,
    content: "Milk",
    date: new Date()
};
var quantity = prop(propVariable, "quantity");
var content = prop(propVariable, "content");
var date = prop(propVariable, "date");
console.log("quantity :: " + quantity);
console.log("content :: " + content);
console.log("date :: " + date);
function freezePoint(p) {
    return Object.freeze(p);
}
/*
const origin = freezePoint({x: 0, y: 0});
//console.log("origin :: "+origin);
origin.x = 42;
 */
