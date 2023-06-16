function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    let temp = prompt("Enter Number");
    this.value += Number(temp);
  };
}

let acc = new Accumulator(30);
console.log(acc);
