function draw(n) {
  let star = "";
  for (let column = 0; column < n; column++) {
    star = star + "*";
  }
  for (let row = 0; row < n; row++) {
    console.log(star);
  }
}

draw(2);
draw(3);
draw(4);
