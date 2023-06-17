array1 = ["APPLE", "appLE", "PEACH", "PEach"];
// array2 = ["APPLE", "PEACH"] // filter คำที่เป็นอักษรใหญ่ทุกตัว

let array2 = array1.filter((x) => x === x.toUpperCase());
console.log(array2);
