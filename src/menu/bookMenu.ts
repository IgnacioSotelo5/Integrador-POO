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
            break;
        case 1:
            library.updateBook()
            break;
        case 2:
            library.showBooks()
            break;
        case 3:
            library.deleteBook()
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
]