function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

delete Rabbit.prototype.eats; // การเปลี่ยนบรรทัดนี้

alert(rabbit.eats); // alert undefined เพราะ ถูกลบ จากบรรทัดบนที่เปลี่ยนค่า prototype.eats
