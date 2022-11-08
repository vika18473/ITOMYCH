let arr = [1,2,3,4,5]

function reduce(array, callback, value) {
    for (const item of array) {
        value = callback(value, item);
    }
    return value;
};

console.log(reduce(arr,(value2, value)=>{
    return  value2 + value
},0))