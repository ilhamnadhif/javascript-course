/* function repeatStr(n, s) {
  let huruf = "";
  for (let i = 0; i < n; i++) {
    huruf += s;
  }
  return huruf;
} */

function repeatStr(n, s) {
  return s.repeat(n);
}

console.log(repeatStr(3, "*"), "***");
console.log(repeatStr(5, "#"), "#####");
console.log(repeatStr(2, "ha "), "ha ha ");
