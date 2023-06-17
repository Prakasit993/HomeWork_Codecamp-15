array1 = [
  { name: "apple", birth: "2001-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
  { name: "peach", birth: "2002-10-13" },
];
/*array2 [
    { name: "banana", birth: "1990-10-10" },
      { name: "peach", birth: "2002-10-13" },
  ] // filter คนเกิดเดือน 10 */

// /** In JavaScript, the first month (January) is month number 0, so December returns month number 11. */
let array2 = array1.filter(
  (cur, i, arr) => new Date(arr[i]["birth"]).getMonth() === 10 - 1
);
console.log(array2);
