function palindrome(str) {
  const kataAwal = 97;
  const kataAkhir = 122;
  const nomorAwal = 48;
  const nomorAkhir = 57;

  let kata = [];

  str
    .toLowerCase()
    .split("")
    .forEach((el) => {
      for (let i = kataAwal; i <= kataAkhir; i++) {
        if (el.charCodeAt(0) == i) {
          kata.push(el);
        }
      }
      for (let a = nomorAwal; a < nomorAkhir; a++) {
        if (el.charCodeAt(0) == a) {
          kata.push(el);
        }
      }
    });

  let word = [];

  for (let i = kata.length - 1; i >= 0; i--) {
    word.push(kata[i]);
  }
  if (kata.join("") === word.join("")) {
    return true;
  }
  return false;
}

console.log(palindrome("kodokkodok"));
