function draw(n) {
  let string = "";
  let i = 1;
  for (let column = 1; column <= n; column++) {
    for (let number = 1; number <= n; number++) {
      string += i;
      i++;
    }

    string += "\n";
  }

  console.log(string);
}

draw(2);
draw(3);
draw(4);
