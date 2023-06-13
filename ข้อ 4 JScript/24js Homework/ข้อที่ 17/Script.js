function draw(n) {
  let string = "";

  for (column = n; column > 0; column--) {
    for (number = 1; number <= n; number++) {
      number >= column ? (string += "*") : (string += "_");
    }
    string += "\n";
  }

  console.log(string);
}
draw(2);
draw(3);
draw(4);
