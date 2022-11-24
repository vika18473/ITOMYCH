import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });


async function timetable() {
 await import('./table.js').then((data) => rl.question("Write day  " , (input)=>{
  console.log(data.table.find((dayTable) => dayTable.day === input.toLowerCase()))
})).catch((e) => console.log(e));
  
  }
  timetable()