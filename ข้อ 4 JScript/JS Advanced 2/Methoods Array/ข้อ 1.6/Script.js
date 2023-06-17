array1 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];
// array2 [14, 18, 32]

let array2 = array1.map((item, i, arr) => arr[i]["age"]);
console.log(array2);
