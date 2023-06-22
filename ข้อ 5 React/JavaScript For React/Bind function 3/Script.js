function sayHi() {
  alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "John",
});

alert(bound.test); // ผลลัพธ์คืออะไร แล้ว ทำไมจึงได้อย่างนั้น
// ผลลัพธ์คือ undefined เพราะ test ไม่มี property
