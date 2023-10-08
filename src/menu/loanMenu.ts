import * as rls from 'readline-sync'
import { mainMenu } from './mainMenu';
import { library } from '../index';


export function loanMenu(){
    console.clear()
    // eslint-disable-next-line no-constant-condition
    while(true){
        const choice = rls.keyInSelect(loanMenuOptions)
        switch(choice){
        case 0: 
            library.lendItem()
            break;
        case 1:
            library.returnItem()
            break;
        case 2:
            library.showActiveLoans()
            break;
        default:
            mainMenu() 
            return
        }
    }
}

const loanMenuOptions = [
    'Lend item',
    'Return item',
    'Show active Loans',
]