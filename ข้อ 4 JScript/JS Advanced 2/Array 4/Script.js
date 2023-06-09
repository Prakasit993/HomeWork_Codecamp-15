function getMaxSubSum(arr) {
  let sum = arr[0];
  let sumMax = sum;

  for (let i = 1; i < arr.length; i++) {
    sum = Math.max(arr[i], sum + arr[i]);
    if (sumMax < sum) sumMax = sum;
  }
  return sumMax;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([2, -1, 2, 3, -9])); // 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
console.log(getMaxSubSum([1, 2, 3])); // 6
