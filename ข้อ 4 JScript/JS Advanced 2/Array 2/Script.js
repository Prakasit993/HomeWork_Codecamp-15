let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");

console.log(styles);

styles[1] = "Classic";

console.log(styles);

styles.shift(0); // delete styles[0];

console.log(styles);

styles.unshift("Rap", "Reggae");

console.log(styles);
