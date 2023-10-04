import * as rls from 'readline-sync'
import { mainMenu } from './mainMenu';



export function loanMenu(){
    console.clear()
    while(true){
        const choice = rls.keyInSelect(loanMenuOptions)
        switch(choice){
        case 0: 
            break;
        case 1:
            mainMenu()
            break;
        default:
            console.log(`See you!`);  
            return
        }
    }
}

const loanMenuOptions = [
    'Show active Loans',
    'Back'
]