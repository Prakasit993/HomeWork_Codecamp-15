array1 = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
];
/*array2 [
      "<tr>
        <td>apple</td> 
        <td>01 jan 2000</td>
       </tr>",
      "<tr> <td>banana</td> <td>10 oct 1990</td> </tr>",
      "<tr> <td>watermelon</td> <td>30 dec 1985</td> </tr>",
  ] */

let shortMonth2 = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];
let array2 = array1.map(
  (item, i, arr) =>
    `<tr> <td>${arr[i].name}</td> <td>${
      new Date(arr[i].birth).getDate() < 10
        ? "0" + new Date(arr[i].birth).getDate()
        : new Date(arr[i].birth).getDate()
    } ${shortMonth2[new Date(arr[i].birth).getMonth()]} ${new Date(
      arr[i].birth
    ).getFullYear()}</td> </tr>`
);
console.log(array2); // ☺☺☺☺☺
