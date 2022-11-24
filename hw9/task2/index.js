import {table}  from './table.js';
import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });


async function timetable() {

    rl.question("Write day  " , (input)=>{
      console.log(table.find((dayTable) => dayTable.day === input.toLowerCase()))
    })
  }
  timetable()