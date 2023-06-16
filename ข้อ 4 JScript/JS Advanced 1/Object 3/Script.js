function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

console.log(isEmpty);

let obj = {
  name: "sonter",
};

console.log(obj);
console.log(isEmpty(obj));

obj = {};

console.log(obj);
console.log(isEmpty(obj));
