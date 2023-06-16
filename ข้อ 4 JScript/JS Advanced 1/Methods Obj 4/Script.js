let ladder = {
  step: 0,

  up() {
    this.step++;
    return this;
  },

  down() {
    this.step--;
    return this;
  },

  showStep: function () {
    alert(this.step);
    return this;
  },
};

ladder.up();

ladder.up();

ladder.down();

ladder.showStep(); // 1

console.log(ladder.showStep());

ladder.up().up().down().showStep(); // 1

console.log(ladder.showStep());
