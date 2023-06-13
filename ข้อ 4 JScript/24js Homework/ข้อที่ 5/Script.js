function draw(n) {
  let string = "";
  let i = n;
  for (let column = 1; column <= n; column++) {
    for (let number = 1; number <= n; number++) {
      string += i;
    }

    string += "\n";
    i--;
  }

  console.log(string);
}

draw(2);
draw(3);
draw(4);
