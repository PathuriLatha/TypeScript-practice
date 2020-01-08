var numberArray = [1, 2, 3];
numberArray.forEach(function (numValue) {
    console.log(numValue);
});
var stringArray = ["Shirisha", "Bhargavi", "Srivani", "Rama", "Latha"];
stringArray.forEach(function (strValue) {
    console.log(strValue);
});
var anyArray = [101, "Lasya", 102, "Meghana", false, null, undefined, ["loukhya", "Advith"], {}];
anyArray.forEach(function (anyValue) {
    console.log(anyValue);
});
var obj = {
    name: "latha",
    qualification: "B.Tech",
    address: "Sircilla",
    familyMembers: 5
};
obj.forEach(function (key, value) {
    console.log(key + " : " + value);
});
