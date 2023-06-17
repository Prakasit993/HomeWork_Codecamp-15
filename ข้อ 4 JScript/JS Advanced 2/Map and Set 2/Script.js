function aclean(a) {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < a.length; i++) {
    let newArr = a.filter(
      (x) =>
        x.length === a[i].length &&
        [...x.toLowerCase()].sort().join() ===
          [...a[i].toLowerCase()].sort().join()
    );
    if (newArr.length > 1) {
      arr1.push(newArr[0]);
      arr2.push(newArr[1]);
    }
  }
  [...arr1] = new Set(arr1);
  [...arr2] = new Set(arr2);
  return `"${arr1}" or "${arr2}"`;
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"  (<--นี้คือโจทย์?[slide169])

console.log(aclean(arr));
