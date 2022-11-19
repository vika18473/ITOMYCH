import * as readline from 'readline'
import { stdin as input, stdout as output } from 'process'

const rl = readline.createInterface({ input, output });

let res = 0
const Random = () => {
    return Math.floor(Math.random() * 6 + 1);
}

const Game = () => {
    return rl.question("Введите цифру от 1 до 6 ", (input) => {
        console.log(`Твой рекорд : ${res}`)
        const num = Number(input)
        const randomNumber = Random()
        if (1 <= num && num <=6) {
            console.log(num)
            if(num == randomNumber){
                res +=2
                 Game()
            }else if( num+1 == randomNumber|| num-1 == randomNumber){
                res += 1
                 Game()
            }else{
                 Game()
            }
        } else {
            console.log("Не правильная цифра");
           Game()
        }
    })
}
Game()
