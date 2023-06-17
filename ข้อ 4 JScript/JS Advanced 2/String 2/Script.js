function checkSpam(str) {
  let lowerStr = str.toLowerCase();
  return lowerStr.includes("xxx") || lowerStr.includes("viagra");
}

checkSpam("");

console.log(checkSpam("Hello World"));
console.log(checkSpam("Hello What the fuck xxx"));
console.log(checkSpam("viagra is ... "));
