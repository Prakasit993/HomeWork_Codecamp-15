let key = prompt("Enter fruit", "apple");
let obj = {};

while (key !== "stop") {
  let value = prompt(`Enter the number of ${key}`);
  if (+value > 1) {
    key = key + "s";
  }
  obj[key] = value;
  key = prompt("Enter fruit's name");
}
console.log(obj);
