import * as rls from 'readline-sync'
import { mainMenu } from './mainMenu';
import { library } from '../index';


export function bookMenu(){
    console.clear()
    //eslint-disable-next-line no-constant-condition
    while(true){
        const choice = rls.keyInSelect(bookMenuOptions)
        switch(choice){
            case 0:
            library.createBook()
            rls.keyInPause('\n')
            break;
        case 1:
            library.updateBook()
            rls.keyInPause('\n')
            break;
        case 2:
            library.showBooks()
            rls.keyInPause('\n')
            break;
        case 3:
            library.deleteBook()
            rls.keyInPause('\n')
            break;
        case 4: 
            mainMenu()
            break;
        default:
            console.log(`See you!`);  
            return
        }
    }
}

const bookMenuOptions = [
    'Create Book',
    'Update Book',
    'Show Books',
    'Delete Book',
    'Back'
]