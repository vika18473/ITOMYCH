
import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

rl.on("line", (input)=>{ 
        if(input >= 1 && input <= 1000){
        let per = 4*input
        let ar = input*input
        console.log("perimeter:", per, " Area:", ar)
        }
        console.log("Введите число от 1 до 1000")
    }
)
