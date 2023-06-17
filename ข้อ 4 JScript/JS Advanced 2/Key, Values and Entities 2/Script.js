let user = {
  name: "John",
  age: 30,
};

function count(obj) {
  let arrProps = Object.keys(obj);
  return arrProps.length;
}

alert(count(user)); // 2
console.log(count(user));
