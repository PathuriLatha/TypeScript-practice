let array = [1, "Latha", true, "Hyderabad"];

//for..of gives values
for(let entry of array){
  console.log(entry);
}

//for..in gives indexes
for(let entry in array){
  console.log(entry);
}

let students = ["Mpc", "Bsc", "ECE"];
//let students = new Set(["Mpc", "Bsc", "ECE"]);
students["MTech"] = "Embedded";
console.log("for..in");
for(let student in students){
  console.log(student)
}
console.log("for..of");
for(let student of students){
  console.log(student);
}
