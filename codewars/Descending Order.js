// function descendingOrder(n) {
//   let v =  n.toString().split("").map(a=>{
//       return a
//   }).sort().reverse().join("")
//   return parseInt(v)
// }
function descendingOrder(n) {
  return parseInt(n.toString().split("").sort().reverse().join(""));
}
console.log(descendingOrder(0), 0);
console.log(descendingOrder(1), 1);
console.log(descendingOrder(111), 111);
console.log(descendingOrder(15), 51);
console.log(descendingOrder(1021), 2110);
console.log(descendingOrder(123456789), 987654321);
