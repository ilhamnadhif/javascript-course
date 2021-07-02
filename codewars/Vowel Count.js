function getCount(str) {
  var vowelsCount = [];

  str.split("").forEach((e) => {
    if (e === "a" || e === "i" || e === "u" || e === "e" || e === "o") {
      vowelsCount.push(e);
    }
  });

  return vowelsCount.length;
}
console.log(getCount("abracadabra"), 5);
