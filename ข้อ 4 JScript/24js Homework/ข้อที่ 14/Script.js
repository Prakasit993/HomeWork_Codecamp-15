function draw(n) {
  let string = "";
  for (let column = n; column > 0; column--) {
    for (let number = 1; number <= n; number++) {
      if (number > column) {
        string += "_";
      } else {
        string += "*";
      }
    }

    string += "\n";
  }

  console.log(string);
}
draw(2);
draw(3);
draw(4);
