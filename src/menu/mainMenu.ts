import * as rls from 'readline-sync'
import { bookMenu } from './bookMenu'
import { userMenu } from './userMenu';
import { loanMenu } from './loanMenu';
import { magazineMenu } from './magazineMenu';

export function mainMenu(){
    while(true){
    console.clear()
    const choice = rls.keyInSelect(menuOptions, 'Que te gustaria hacer?')
    switch (choice) {
        case 0:
            userMenu()
            break;
        case 1:
            bookMenu()
            break;
        case 2:
            magazineMenu()
            break;
        case 3:
            loanMenu()
            break;
        default:
            console.log(`See you!`);  
            return
        }
    }
}
    const menuOptions = ['Users', 'Books', 'Magazines', 'Loans']