let map = new Map();

map.set("name", "John");

let keys = map.keys();

// Error: keys.push is not a function
// keys.push("more");

let arr = [];
for (let i of keys) {
  arr.push(i);
}
arr.push("more");

console.log(arr);
