function highAndLow(numbers) {
  let hl = "";
  let num = numbers.split(" ").map((e)=>{
    return parseInt(e)
  })
  hl += Math.max(...num) + " "
  hl += Math.min(...num)
  return hl
}
console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");
