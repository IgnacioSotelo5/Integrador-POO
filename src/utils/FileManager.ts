import * as fs from 'node:fs'
import { User, UserObject } from "../classes/User";
import { Loan, loanObject } from "../classes/Loan";
import * as rls from 'readline-sync'
import { LibraryItem, libraryItemObject } from '../classes/LibraryItem';
import { Book, bookObject } from '../classes/Book';
import { Magazine, magazineObject } from '../classes/Magazine';

export class FileManager{

    static readFile(fileName: string){
        try {
            const items = fs.readFileSync(`${fileName}.json`, {encoding: 'utf-8'})
            const itemsData = JSON.parse(items)
            if(fileName === 'users'){
                return itemsData.map((item: UserObject) => User.userFromData(item))   
            }
            if(fileName === 'items'){
                return itemsData.map((item: any) => {
                    if (item.type === 'Book') {
                        return Book.bookFromData(item as bookObject)
                    } else if (item.type === 'Magazine') {
                        return Magazine.magazineFromData(item as magazineObject)
                    } else {
                        return LibraryItem.itemFromData(item as libraryItemObject);
                    }
                })
            }
            if(fileName === 'loans'){
                return itemsData.map((item: loanObject) => Loan.loanFromData(item))      
            }
            
        } catch (error) {
            console.log(`Unexpected error: ${error}`)
            return []
            
        }
    }
    static appendToFile(data: User[] | LibraryItem []| Loan[], fileName: string){
        const dir = '../data/'
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir)
        }
        try {
            fs.writeFileSync(`${dir}/${fileName}.json`, JSON.stringify(data, null, 2), {encoding: 'utf-8'}  )
        } catch (error) {
            console.log(`Unexpected error: ${error}`)
            rls.keyInPause('\n')
        }

    }
}
