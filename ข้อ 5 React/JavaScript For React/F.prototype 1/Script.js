function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};
let rabbit = new Rabbit();

alert(rabbit.eats); // alert True

let rabbit2 = new Rabbit();

console.log(rabbit2.eats); // สร้าง new Rabbit() ขึ้นมาใหม่ มีค่าเป็น True
