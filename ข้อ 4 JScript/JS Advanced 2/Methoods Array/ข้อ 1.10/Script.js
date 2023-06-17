array1 = [100, 200.25, 300.84, 400.3];
// array2 ["100.00", "200.25", "300.84", "400.30"]

let array2 = array1.map((a) => a.toFixed(2));
console.log(array2);
