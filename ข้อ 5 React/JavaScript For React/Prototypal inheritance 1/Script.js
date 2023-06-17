let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};

alert(rabbit.jumps); // ? (1) ค่าออกมาเป็น true

delete rabbit.jumps;

alert(rabbit.jumps); // ? (2) ค่าออกมาเป็น null

delete animal.jumps;

alert(rabbit.jumps); // ? (3) ค่าออกมาเป็น undefined
