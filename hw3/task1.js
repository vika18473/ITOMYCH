import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
rl.on('line', (input) => {
    if(input >= 10 && input <= 99){
    let res = input.split("").join(" ")
    console.log(`Result: ${res}`);
    }else{
    console.log("The number must be between 10 and 99")
    }
  
  });