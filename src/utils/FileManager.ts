import * as fs from 'node:fs'
import { User, UserObject } from "../classes/User";
import { Loan } from "../classes/Loan";
import * as rls from 'readline-sync'
import { Book } from "../classes/Book";
import { Magazine } from "../classes/Magazine";


export class FileManager{

    static readFile(fileName: string){
        try {
            const items = fs.readFileSync(`./${fileName}.json`, {encoding: 'utf-8'})
            rls.keyInPause('\n')
            const itemsData = JSON.parse(items)
            if(fileName === 'users'){
                return itemsData.map((item: UserObject) => User.userFromData(item))
            }
            if(fileName === 'books'){
                console.log();
                
            }
            if(fileName === 'magazines'){
                console.log();
                
            }
            if(fileName === 'loans'){
                console.log();
                
            }
        } catch (error) {
            console.log(`Unexpected error: ${error}`)
        }
    }
    static appendToFile(data: User[] | Book[] | Magazine[] | Loan[], fileName: string){
        try {
            fs.writeFileSync(`./${fileName}.json`, JSON.stringify(data), {encoding: 'utf-8'}  )
            rls.keyInPause('\n')
        } catch (error) {
            console.log(`Unexpected error: ${error}`)
            rls.keyInPause('\n')
        }

    }
}
// export class FileManager{

//     static readUsers(){
//         interface UserObject {
//             id: string;
//             name: string;
//             address: iAddress;
//             phoneNumber: string;
//         }
        
//         try {
//             const users = fs.readFileSync('./users.json', {encoding: 'utf-8'})
//             rls.keyInPause('\n')
//             const usersData = JSON.parse(users)
//             return usersData.map((user: UserObject) => new User(user.id, user.name, {street: user.address.street, number: user.address.number, apartment: user.address.apartment}, user.phoneNumber))
//         } catch (error) {
//             console.log(`Unexpected error: ${error}`)
//         }
//     }
//     static appendUser(data: User[]){
//         try {
//             fs.writeFileSync('./users.json', JSON.stringify(data), {encoding: 'utf-8'}  )
//             rls.keyInPause('\n')
//         } catch (error) {
//             console.log(`Unexpected error: ${error}`)
//             rls.keyInPause('\n')
//         }

//     }
// }