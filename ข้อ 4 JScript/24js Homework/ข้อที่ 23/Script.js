function draw(n) {
  let string = "";
  let col = 2 * n - 1;
  let row = 2 * n - 1;

  for (let column = 1; column <= row; column++) {
    if (column <= n) {
      let lowerLimit = n - column + 1;
      let HigherLimit = n + column - 1;

      for (let number = 1; number <= col; number++) {
        number >= lowerLimit && number <= HigherLimit
          ? (string += "*")
          : (string += "_");
      }

      string += "\n";
    } else {
      let lowerLimit = column - n + 1;
      let HigherLimit = 3 * n - column - 1;

      for (let number = 1; number <= col; number++) {
        number >= lowerLimit && number <= HigherLimit
          ? (string += "*")
          : (string += "_");
      }
      string += "\n";
    }
  }

  console.log(string);
}

draw(2);
draw(3);
draw(4);
