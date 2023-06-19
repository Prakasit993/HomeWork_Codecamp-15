function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};
let rabbit = new Rabbit();

Rabbit.prototype.eats = false; // เปลี่ยนค่า prototype.eats จากเดิมเป็น false

alert(rabbit.eats); // alert false
