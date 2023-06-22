function f() {
  alert(this); // null เนื่องจาก This ไม่มีทางเปลี่ยนค่ามันได้
}

let user = {
  g: f.bind(null),
};

user.g(); // ดังนั้น แม้จะรัน user.g() ฟังก์ชันเดิมจะถูกเรียกใช้ this = null ด้วย
