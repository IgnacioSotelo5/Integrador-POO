import * as rls from 'readline-sync'
import { mainMenu } from './mainMenu';
import { library } from '../index'


export function userMenu(){
    console.clear()
    while(true){
        const choice = rls.keyInSelect(userMenuOptions)
        switch(choice){
            case 0:
            library.createUser()
            break;
        case 1:
            library.updateUser()
            break;
        case 2:
            library.showUsers()
            break;
        case 3:
            library.deleteUser()
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

const userMenuOptions = [
    'Create User',
    'Update User',
    'Show User',
    'Delete User',
    'Back'
]