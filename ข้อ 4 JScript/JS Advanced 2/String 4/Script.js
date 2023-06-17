function extractCurrencyValue(str, rate) {
  return "THB" + str.slice(1) * rate;
}

alert(extractCurrencyValue("$120", 30.5)); // === 3,660
