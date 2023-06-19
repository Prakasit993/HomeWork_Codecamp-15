let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  stomach: [], // แก้ไขโดยการกำหนดให้มี stomach เป็นของตัวเอง
  __proto__: hamster,
};

let lazy = {
  stomach: [], // แก้ไขโดยการกำหนดให้มี stomach เป็นของตัวเอง
  __proto__: hamster,
};

// This one found the food
speedy.eat("apple");
alert(speedy.stomach); // apple

// This one also has it, why? fix please.
alert(lazy.stomach); // apple (เมื่อทั้งสอง object มี stomach ของตัวเอง, speedy ก็ไม่ต้องแชร์ apple กับ lazy=[])
