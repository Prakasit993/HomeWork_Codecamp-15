let animal = {
  eat() {
    this.full = true;
  },
};
let rabbit = {
  __proto__: animal,
};
rabbit.eat(); // ตอบ. rabbit ได้ {full: true}
