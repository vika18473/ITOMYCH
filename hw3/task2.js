import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
const numeralMap = {
    M:1000,
    D:500, 
    C:100,
    L:50,
    X:10, 
    V:5,
    I:1
  };
  
 
   

rl.on("line", (input)=>{ 
   
    let arrNums = input.split('').map((el) => numeralMap[el]);
   
    let sumArab = arrNums[0] + arrNums[2]
       
    let ans = '';
    let i
    for (i in numeralMap) {
      while (sumArab >= numeralMap[i]) {
        ans += i;
        sumArab -= numeralMap[i];
      }
    }
    console.log(ans);
})