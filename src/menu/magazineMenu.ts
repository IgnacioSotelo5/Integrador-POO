import * as rls from 'readline-sync'
import { library } from '../index';



export function magazineMenu(){
    console.clear()
    while(true){
        const choice = rls.keyInSelect(magazineMenuOptions)
        switch(choice){
            case 0:
            library.createMagazine()
            rls.keyInPause('\n')
            break;
        case 1:
            library.updateMagazine()
            rls.keyInPause('\n')
            break;
        case 2:
            library.showMagazines()
            rls.keyInPause('\n')
            break;
        case 3:
            library.deleteMagazine()
            rls.keyInPause('\n')
            break;
        default:
            console.log(`See you!`);  
            return
        }
    }
}

const magazineMenuOptions = [
    'Create Magazine',
    'Update Magazine',
    'Show Magazine',
    'Delete Magazine',
]