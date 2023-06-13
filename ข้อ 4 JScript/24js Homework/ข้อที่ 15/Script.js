function draw(n) {
  let string = "";
  after = n - 1;

  for (let column = 1; column <= 2 * n - 1; column++) {
    if (column < n) {
      for (let number = 1; number <= n; number++) {
        if (number <= column) {
          string += "*";
        } else {
          string += "_";
        }
      }
      string += "\n";
    } else if (column == n) {
      for (let number = 1; number <= n; number++) {
        string += "*";
      }

      string += "\n";
    } else if (column > n) {
      for (let number = 1; number <= n; number++) {
        if (number <= after) {
          string += "*";
        } else {
          string += "_";
        }
      }
      after--;
      string += "\n";
    }
  }
  console.log(string);
}
draw(2);
draw(3);
draw(4);
