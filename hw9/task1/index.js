import {evalCalc} from "./calc.js"

import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

rl.on("line", (input)=>{ 
console.log(evalCalc(input))
})
