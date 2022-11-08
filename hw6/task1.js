function mult(matrix1,matrix2){
    if(matrix1[0].length != matrix2.length){
        return "Matrix is not equel"
    }
    let res =  new Array(matrix1.length)
    for(let i =0;i<matrix1.length;i++){
        res[i] = new Array(matrix2.length)
    }
    let sum = 0
    for(let j = 0; j<matrix1.length;j++){
        for(let u = 0 ; u<matrix2.length;u++){
            sum = 0
            for(let i = 0 ;i<matrix2.length;i++){
                console.log(matrix1[j][i], matrix2[i][u])
                sum += matrix1[j][i]* matrix2[i][u]
            }
            res[j][u] = sum
          
        }
    }
    return res
}

matrix1 = [[1, 3, 4],
           [5, -2, 3]]

matrix2 = [[1, 3, 2],
           [2, 1, 3],
           [0, -1, 1]]
           
console.log(mult(matrix1,matrix2))