array1 = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
  { name: "pineapple", age: 16 },
  { name: "peach", age: 24 },
];
/*array2 [
    { name: "apple", age: 14 },
    { name: "pineapple", age: 16 },
  ] // filter age < 18 */

let array2 = array1.filter((cur, i, arr) => arr[i]["age"] < 18);
console.log(array2);
