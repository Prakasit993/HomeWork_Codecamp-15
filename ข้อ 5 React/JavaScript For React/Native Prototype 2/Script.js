Function.prototype.defer = function (ms) {
  let f = this;
  return function (...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
};
function f(a, b) {
  alert(a + b);
}
f.defer(1000)(1, 2); // แสดง 3 หลังจากผ่านไป 1 วินาที
