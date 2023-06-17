array1 = [1, "1", 2, {}];
// array2 [1, 2] // filter Number

let array2 = array1.filter((x) => typeof x === "number");
console.log(array2);
