array1 = [1, 3, 4, 5, 6, 7, 8];
// array2 ["odd", "odd", "even", "odd", "even", "odd", "even"]

let array2 = array1.map((a) => (a % 2 === 0 ? "even" : "odd"));
console.log(array2);
