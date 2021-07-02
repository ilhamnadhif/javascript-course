function disemvowel(str) {
  let kata = "";
  str.split("").forEach((e) => {
    if (
      !(
        e == "a" ||
        e == "A" ||
        e == "i" ||
        e == "I" ||
        e == "u" ||
        e == "U" ||
        e == "e" ||
        e == "E" ||
        e == "o" ||
        e == "O"
      )
    ) {
      kata += e;
    }
  });
  return kata;
}
console.log(
  disemvowel("This website is for losers LOL!"),
  "Ths wbst s fr lsrs LL!"
);
console.log(
  disemvowel("No offense but,\nYour writing is among the worst I've ever read"),
  "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
);
console.log(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?");
