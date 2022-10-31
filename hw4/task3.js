const createBase = base => (num) => base + num
let addSix = createBase(6)
console.log(addSix(10)) // 16
console.log(addSix(21)) // 27 


