function draw(n) {
  let string = "";
  let row = 2 * n - 1;
  let col = n;
  let count = 1;

  for (column = 1; column <= row; column++) {
    for (number = col; number > 0; number--) {
      if (column <= n) {
        number <= column ? ((string += count), count++) : (string += "-");
      } else {
        number > row - column + 1
          ? (string += "-")
          : ((string += count), count++);
      }
    }
    string += "\n";
  }

  console.log(string);
}
draw(2);
draw(3);
draw(4);
