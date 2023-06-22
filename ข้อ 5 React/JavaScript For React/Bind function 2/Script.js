function f() {
  alert(this.name);
}

f = f.bind({ name: "John" }).bind({ name: "Ann" });

f(); // ผลลัพธ์ที่ได้คือ John
