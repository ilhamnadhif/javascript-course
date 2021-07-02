function lifePathNumber(dateOfBirth) {
    let jumlah = 0;
    let date = dateOfBirth.split("-").map(da=>{
        if (da.length > 1) {
            return da.split("").map(d=>{
                return parseInt(d)
            }).reduce((acc, curr)=> acc+curr)
        }
    })
    let tanggal = date.map(da=>{
        return da.toString().split("").map(h=>{
            return parseInt(h)
        }).reduce((acc, curr)=> acc+curr)
    })
    let t = tanggal.reduce((acc, curr)=> acc+curr).toString().split("").map(a=>{
        return parseInt(a)
    }).reduce((acc, curr)=>acc+curr)
    return t.toString().split("").map(a=>{
        return parseInt(a)
    }).reduce((acc, curr)=> acc+curr)
}

console.log(lifePathNumber("1879-03-14"), 6) 
console.log(lifePathNumber("1815-12-10"), 1) 
console.log(lifePathNumber("1879-03-14"), 6) 
console.log(lifePathNumber("1961-07-04"), 1) 
