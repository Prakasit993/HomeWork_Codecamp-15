function f(x) {
  alert(x);
}

function delayDecorator(func, ms) {
  return function (...arr) {
    setTimeout(() => func.apply(this, arr), ms);
  };
}

let f1000 = delayDecorator(f, 1000);
let f1500 = delayDecorator(f, 1500);

console.log(f1000("test"));
console.log(f1500("test"));
