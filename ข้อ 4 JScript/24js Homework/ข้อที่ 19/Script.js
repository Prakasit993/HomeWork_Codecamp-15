function draw(n) {
  let string = "";
  let row = 2 * n - 1;

  for (column = 1; column <= row; column++) {
    for (number = n; number > 0; number--) {
      if (column <= n) {
        number <= column ? (string += "*") : (string += "_");
      } else {
        number > row - column + 1 ? (string += "_") : (string += "*");
      }
    }
    string += "\n";
  }

  console.log(string);
}
draw(2);
draw(3);
draw(4);
