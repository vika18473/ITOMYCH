let arr = [1,2,2,3,3,3]


function repeatingElements(arr){
    let newArr = []
    for(let element of arr){
        if(!newArr.includes(element)){
            newArr.push(element)
        }
    }
    return newArr
}
console.log(repeatingElements(arr))