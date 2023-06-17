let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  stomach: [], // <<= (เพิ่มบรรทัดนี้) แก้ไขโดยการกำหนดให้มี stomach เป็นของตัวเอง
  __proto__: hamster,
};

let lazy = {
  stomach: [], // <<= (เพิ่มบรรทัดนี้) แก้ไขโดยการกำหนดให้มี stomach เป็นของตัวเอง
  __proto__: hamster,
};

// This one found the food
speedy.eat("apple");
alert(speedy.stomach); // apple

// This one also has it, why? fix please.
alert(lazy.stomach); // apple <<=(เมื่อทั้งสอง object มี stomach ของตัวเอง,speedyก็ไม่ต้องแชร์appleกับlazy=[])
