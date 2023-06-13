function draw(n) {
  let string = "";
  for (let column = 1; column <= n; column++) {
    for (let number = 1; number <= n; number++) {
      if (column == number) {
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
