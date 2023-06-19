function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

delete rabbit.eats; // การเปลี่ยนบรรทัดนี้ ไม่ส่งผลอะไร เพราะ rabbit ไม่มี eats ขอตัวเอง

alert(rabbit.eats); // alert True , เพราะ rabbiy ใช้ prototype ที่รับมาจาก Rabbit
