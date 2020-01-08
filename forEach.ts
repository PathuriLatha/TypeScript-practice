let numberArray: number[] = [1, 2, 3];
numberArray.forEach(
  (numValue) => {
    console.log(numValue);
  }
);

let stringArray: string[] = ["Shirisha", "Bhargavi", "Srivani", "Rama", "Latha"];
stringArray.forEach(
  function(strValue){
    console.log(strValue);
  }
);

let anyArray: any[] = [101, "Lasya", 102, "Meghana", false, null, undefined, ["loukhya", "Advith"], {}];
anyArray.forEach(
  (anyValue) => {
    console.log(anyValue);
  }
);

/*
let obj = {
  name: "latha",
  qualification: "B.Tech",
  address: "Sircilla",
  familyMembers: 5
}

obj.forEach(
  function(key, value){
    console.log(`${key} : ${value}`);
  }
);
 */
