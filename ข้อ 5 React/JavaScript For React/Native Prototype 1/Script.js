Function.prototype.defer = function (ms) {
  let f = this;
  return function (...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
};
function f() {
  alert("Hello!");
}
let printHello = f.defer(1000); // แสดง "Hello!" หลังจากผ่านไป 1 วินาที
printHello();
