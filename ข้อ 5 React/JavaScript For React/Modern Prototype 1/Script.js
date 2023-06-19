let dictionary = Object.create(null);
// your code to add dictionary.toString method
dictionary = Object.create(null, {
  toString: {
    value() {
      return Object.keys(this).join();
    },
  },
});

// add some date
dictionary.apple = "Apple";
dictionary.apple._proto_ = "test"; // _proto_ is a regular property key here

// only apple and _proto_ are in the loop
for (let key in dictionary) {
  alert(key); // "apple", then "_proto_"
}

// your toString in action
alert(dictionary); // "apple, _proto_"
console.log(dictionary);
