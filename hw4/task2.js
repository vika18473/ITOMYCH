function multiply(num1, num2) {

    if (num2 !== undefined) {
     return Math.pow(num1, num2);
       }
  return function square(num2) {
    return  Math.pow(num2, num1)
  };
    // if (num2 !== undefined) {
    //   return num1 * num2;
    // }
    // return function double(num2) {
    //     return num1 * num2;
    //   };

   
    
  }
  
//   console.log(multiply(4, 5)); //20
//   const square = multiply(2); //10
//   console.log(double(5)); 

console.log(multiply(2, 3));  // 8


const double = multiply(2); // 25
console.log(square(5));  
