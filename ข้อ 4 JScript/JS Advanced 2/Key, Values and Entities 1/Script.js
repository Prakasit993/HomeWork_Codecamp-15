let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salaries) {
  let arrValues = Object.values(salaries);
  if (arrValues.length < 1) {
    return 0;
  }
  return arrValues.reduce((a, b) => a + b);
}

alert(sumSalaries(salaries)); // 650
console.log(sumSalaries(salaries));
