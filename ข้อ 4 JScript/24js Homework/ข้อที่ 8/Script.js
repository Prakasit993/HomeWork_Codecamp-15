function draw(n) {
  let string = "";
  let i = 0;
  for (let column = 1; column <= n; column++) {
    string += ` ${i} \n`;
    i += 2;
  }

  console.log(string);
}

draw(2);
draw(3);
draw(4);
