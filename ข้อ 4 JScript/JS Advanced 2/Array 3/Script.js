function sumInput(num) {
  let strInput = "" + num;
  if (!strInput.trim()) {
    return false;
  }
  return !isNaN(strInput);
}

let input;
let arr = [];

do {
  input = prompt("Enter number");
  if (sumInput(input)) {
    arr[arr.length] = +input;
  }
} while (sumInput(input));

let sum = 0;
for (let el of arr) {
  sum += el;
}
console.log(sum);
console.log(arr);
