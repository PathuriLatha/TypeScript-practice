/*  function calculateStatistics (scores){
    let min = scores[0];
    let max = scores[0];
    let sum = 0;

    for (let score in scores){
        if (score > max){
            max = score;
        }
        else if(score < min){
            min = score;
        }
        sum += score;
    }
    return [min,max,"Hello"];
}

let statistics = calculateStatistics([25,39,78,66,74,80]);

let min = statistics[0];
let max = statistics[1];
let msg = statistics[2]; // Contains hello */

//let mytuple = [10,"Hello"];
let myTuple = [];
myTuple[0] = 120
myTuple[1] = 234
console.log(myTuple);

let detailsTuple = [101, "Lasya", 102, "Meghana", false, null, undefined, ["loukhya", "Advith"], {}]; //create a  tuple
/*
console.log(detailsTuple[0]);
console.log(detailsTuple[1]);
 */
detailsTuple.forEach(
  function(value){
    console.log(value);
  }
);

let Tuple = [10,"Hello","Welcome To","typeScript"];
console.log("Items before push "+Tuple.length);

Tuple.push("pushing Value");
console.log("Items after push "+Tuple.length);
console.log("Items before pop "+Tuple.length);
console.log(Tuple.pop()+" popped from the tuple");

console.log("Items after pop "+Tuple.length);


let a =[101,"hello", [102, "rama"]];
let [b,c, d] = a;
console.log( b );
console.log( c );
console.log( d );

//Generated by typescript 1.8.10
let t1 = [10, "hello"];
let t2 = t1[0];
let t3 = t1[1];
console.log(t2);
console.log(t3);
