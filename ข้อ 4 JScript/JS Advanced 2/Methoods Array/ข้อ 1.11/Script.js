array1 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-01" },
  { name: "watermelon", birth: "1985-12-01" },
];
/*array2 [
    { name: "apple", birth: "2000-01-01", age: 19 },
    { name: "banana", birth: "1990-10-01", age: 29 },
    { name: "watermelon", birth: "1985-12-01", age: 33 },
    ] */

let age = [19, 29, 33];
let array2 = array1;
array2.map((item, i, arr) => (arr[i]["age"] = age[i]));
console.log(array2);
