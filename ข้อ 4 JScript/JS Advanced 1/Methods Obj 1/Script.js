let user = {
  name: "John",
  go: function () {
    alert(this.name);
  },
};

user.go();

console.log(user);
console.log(user.go);
