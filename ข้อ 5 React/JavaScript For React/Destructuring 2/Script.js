let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
let salaries2 = {};

function topSalary(salaries) {
  let mostSalary = 0;
  let who = null;
  for (name in salaries) {
    if (salaries[name] > mostSalary) {
      mostSalary = salaries[name];
      who = name;
    }
  }
  return who;
}

console.log(topSalary(salaries));
console.log(topSalary(salaries2));
