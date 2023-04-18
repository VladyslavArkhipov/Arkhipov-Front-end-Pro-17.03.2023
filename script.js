let ladder = {
  step: 0,
  up: function () {
    this.step++;
    return ladder;
  },
  down: function () {
    this.step--;
    return ladder;
  },
  showStep: function () {
    // показывает текущую ступеньку
    return this.step;
  },
};

console.log(ladder.up().up().down().showStep()); // 1
