array1 = [1, "1", 2, {}];
// array2 ["number", "string", "number", "object"]

let array2 = array1.map((a) => String(typeof a));
console.log(array2);
