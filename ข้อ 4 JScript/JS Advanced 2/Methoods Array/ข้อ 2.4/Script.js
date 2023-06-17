array1 = ["apple", "banana", "orange", "pineapple", "watermeon"];
// array2 ["pineapple", "watermeon"] // filter ตัวอักษร > 6

let array2 = array1.filter((x) => x.length > 6);
console.log(array2);
