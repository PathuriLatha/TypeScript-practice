var array = [1, "Latha", true, "Hyderabad"];
//for..of gives values
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var entry = array_1[_i];
    console.log(entry);
}
//for..in gives indexes
for (var entry in array) {
    console.log(entry);
}
var students = ["Mpc", "Bsc", "ECE"];
//let students = new Set(["Mpc", "Bsc", "ECE"]);
students["MTech"] = "Embedded";
console.log("for..in");
for (var student in students) {
    console.log(student);
}
console.log("for..of");
for (var _a = 0, students_1 = students; _a < students_1.length; _a++) {
    var student = students_1[_a];
    console.log(student);
}
