array1 = [1, -3, 2, 8, -4, 5];
// array2 [1, 3, 2, 8, 4, 5]

let array2 = array1.map((a) => (a < 0 ? a * -1 : a));
console.log(array2);
