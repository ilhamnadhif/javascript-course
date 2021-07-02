class SmallestIntegerFinder {
  findSmallestInt(args) {
      let kecil = Infinity;
      args.forEach(a=>{
          if (a < kecil) {
              kecil = a
          }
      })
      return kecil
  }
}

var sif = new SmallestIntegerFinder();
console.log(sif.findSmallestInt([78, 56, 232, 12, 8]), 8);
console.log(sif.findSmallestInt([78, 56, 232, 12, 18]), 12);
console.log(sif.findSmallestInt([78, 56, 232, 412, 228]), 56);
console.log(sif.findSmallestInt([78, 56, 232, 12, 0]), 0);
console.log(sif.findSmallestInt([1, 56, 232, 12, 8]), 1);
