/* function positiveSum(arr) {
    let hasil = 0;
   arr.forEach(a=>{
      if(a >0){
          hasil += a
      }
  })
  return hasil
} */
function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}
console.log(positiveSum([1,-2,3,4,5]),13);