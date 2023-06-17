array1 = [
  { name: "apple", surname: "London" },
  { name: "banana", surname: "Bangkok" },
  { name: "watermelon", surname: "Singapore" },
];
// array2 ["apple London", "banana Bangkok", "watermelon Singapore"]

let array2 = array1.map(
  (item, i, arr) => `${arr[i]["name"]} ${arr[i]["surname"]}`
);
console.log(array2);
