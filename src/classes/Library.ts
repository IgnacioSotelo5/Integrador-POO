import { Book } from "./Book";
import { Loan } from './Loan'
import { Magazine } from "./Magazine";
import { User } from "./User";
import { mainMenu } from "../menu/mainMenu";
import { FileManager } from "../utils/FileManager";
import * as rls from 'readline-sync'
import { randomUUID } from "crypto";

export class Library {
    
     books: Book[];
     magazines: Magazine[];
     loans: Loan[];
     users: User[];

    constructor(){
        this.books = []
        this.magazines = []
        this.loans = []
        this.users = []
    }
    
    createUser(){
        const readResult = FileManager.readFile('users')
        if(readResult){
            this.users = readResult
        }
        const data = {
            id: randomUUID(),
            name: rls.question('Add a name: '),
            address: {
                street: rls.question('Add your street: '),
                number: rls.questionInt(`Add your street's number: `),
                apartment: rls.question('Apartment, suite, floor, etc.: ')
            },
            phoneNumber: rls.question('Add phone number: ')
        }
        const newUser = new User(data.id, data.name, data.address, data.phoneNumber)
        this.users.push(newUser)
        FileManager.appendToFile(this.users, 'users')
        console.log(this.users);
        rls.keyInPause('\n')
    }
    showUsers(){
        const readResult = FileManager.readFile('users')
        
        if(readResult){
            this.users = readResult
            console.log( '-'.repeat(5), 'Users', '-'.repeat(5));
        }
        if(!this.users.length){
            console.log('No users found. \n');
        } else {
            this.users.forEach((user: User) => {   
                console.log(`
            ID: ${user.ID},
            Name: ${user.Name},
            Address: 
                Street: ${user.Address.street} 
                Number: ${user.Address.number} 
                Apartmet, suite, floor, etc.: ${user.Address.apartment},
            Phone Number: ${user.PhoneNumber},
                `)
            })
        }
        rls.keyInPause('\n')
    }
     updateUser(){
        const readResult = FileManager.readFile('users')
        if(readResult){
            this.users = readResult
        }        
        const idToUpdate = rls.question('Enter the ID of the user to Update: ')
        const userIndex = this.users.findIndex((user) => user.ID === idToUpdate)

        if(userIndex !== -1){
            const userToUpdate = this.users[userIndex]
            const confirmation = rls.keyInYN(`Do you want to update the user ${userToUpdate.Name}? `)
            
            if(confirmation){
                const userData = {
                    name: rls.question('Enter a username: '),
                    address: {
                        street: rls.question('Street name: '),
                        number: rls.questionInt('Street number: '),
                        apartment: rls.question('Apartment, suite, floor, etc.: '),

                    },
                    phoneNumber: rls.question('Enter a phone number: ')

                }
                userToUpdate.Name = userData.name
                userToUpdate.Address = userData.address
                userToUpdate.PhoneNumber = userData.phoneNumber
                FileManager.appendToFile(this.users, 'users')
            } else{
                console.log(`Update cancelled. ${userToUpdate.Name} not updated. \n`);
                
            }
        }
    }
     deleteUser(){
        const idToDelete = rls.question('Enter the ID of the User to delete: ')
        const userIndex = this.users.findIndex((user) => user.ID === idToDelete)

        if(userIndex !== -1){
            const userToDelete = this.users[userIndex]
            const confirmation = rls.keyInYN(`Are you sure to delete the user ${userToDelete.Name}? `)
            if(confirmation){
                this.users.splice(userIndex, 1)
                FileManager.appendToFile(this.users, 'users')
            } else{
                console.log('Deletion canceled.');
                
            }
        } else{
            console.log('User not found.');
        }
        rls.keyInPause('\n')
    }
     createMagazine(){
        const readResult = FileManager.readFile('magazines')
        if(readResult){
            this.magazines = readResult
        }
        const data = {
            id: randomUUID(),
            editorial: rls.question('Add the editorial of the magazine: '),
            title: rls.question('Add the title of the magazine: '),
            year: rls.questionInt('Add the year of the magazine: ')
        }
        const newMagazine = new Magazine(data.editorial, data.title, data.year, data.id)
        this.magazines.push(newMagazine)
        FileManager.appendToFile(this.magazines, 'magazines')
        console.log(this.magazines);
        rls.keyInPause('\n')
    }
   
     updateMagazine(){
        const readResult = FileManager.readFile('magazines')
        if(readResult){
            this.magazines = readResult
        }
        const idToUpdate = rls.question('Enter the ID of the magazine to Update: ')
        const magazineIndex = this.magazines.findIndex((magazine) => magazine.Id === idToUpdate)

        if (magazineIndex !== -1){
            const magazineToUpdate = this.magazines[magazineIndex]
            const confirmation = rls.keyInYN(`Do you want to update ${magazineToUpdate.Title}`)
        
            if(confirmation){
            const magazineData = {
                editorial: rls.question('Enter an editorial update: '),
                title: rls.question('Enter an title update: '), 
                year: rls.questionInt('Enter an year update: '),
            }

            magazineToUpdate.Editorial = magazineData.editorial
            magazineToUpdate.Title = magazineData.title
            magazineToUpdate.Year = magazineData.year
            FileManager.appendToFile(this.magazines, 'magazines')
        } else{
            console.log(`Update cancelled. ${magazineToUpdate.Title} not updated.\n`);
        }
    }
    }
     deleteMagazine(){
        const idToDelete = rls.question('Enter the ID of the book to Delete: ')
        const magazineIndex = this.magazines.findIndex((magazine) => magazine.Id === idToDelete)

        if (magazineIndex !== -1){
            const magazineToDelete = this.magazines[magazineIndex]
            const confirmation = rls.keyInYN(`Do you want to update ${magazineToDelete.Title}`)
        
            if(confirmation){
            this.magazines.splice(magazineIndex, 1)
            FileManager.appendToFile(this.magazines, 'magazines')
        } else{
            console.log('Deletion canceled.');
        }
    }
    }
     showMagazines(){
        const readResult = FileManager.readFile('magazines')
        
        if(readResult){
            this.magazines = readResult
            console.log( '-'.repeat(5), 'Magazines', '-'.repeat(5));
        }
        if(!this.magazines.length){
            console.log('No magazines found. \n');
        } else {
            this.magazines.forEach((magazine: Magazine) => {   
                console.log(`
            ID: ${magazine.Id},
            Title: ${magazine.Title},
            Editorial: ${magazine.Editorial}
            Year: ${magazine.Year},
            `)
            })
        }
        rls.keyInPause('\n')
        
    }
     createBook(){
        const readResult = FileManager.readFile('books')
        if(readResult){
            this.books = readResult
        }
        const data = {
            id: randomUUID(),
            author: rls.question('Add the author of the book: '),
            title: rls.question('Add the title of the book: '),
            year: rls.questionInt('Add the year of the book: ')
        }
        const newBook = new Book(data.author, data.title, data.year, data.id)
        this.books.push(newBook)
        FileManager.appendToFile(this.books, 'books')
        console.log(this.books);
        rls.keyInPause('\n')
    }

     updateBook(){
        const readResult = FileManager.readFile('books')
        if(readResult){
            this.books = readResult
        }
        const idToUpdate = rls.question('Enter the ID of the book to Update: ')
        const bookIndex = this.books.findIndex((book) => book.Id === idToUpdate)

        if (bookIndex !== -1){
            const bookToUpdate = this.books[bookIndex]
            const confirmation = rls.keyInYN(`Do you want to update ${bookToUpdate.Title}`)
        
            if(confirmation){
            const bookData = {
                author: rls.question('Enter an author update: '),
                title: rls.question('Enter an title update: '), 
                year: rls.questionInt('Enter an year update: '),
            }

            bookToUpdate.Author = bookData.author
            bookToUpdate.Title = bookData.title
            bookToUpdate.Year = bookData.year
            FileManager.appendToFile(this.books, 'books')
        } else{
            console.log(`Update cancelled. ${bookToUpdate.Title} not updated.\n`);
        }
    }
    }
     deleteBook(){
        const idToDelete = rls.question('Enter the ID of the book to Delete: ')
        const bookIndex = this.books.findIndex((book) => book.Id === idToDelete)

        if (bookIndex !== -1){
            const bookToDelete = this.books[bookIndex]
            const confirmation = rls.keyInYN(`Do you want to update ${bookToDelete.Title}`)
        
            if(confirmation){
            this.books.splice(bookIndex, 1)
            FileManager.appendToFile(this.books, 'books')
        } else{
            console.log('Deletion canceled.');
        }
    }
}    
     showBooks(){
        const readResult = FileManager.readFile('books')
        
        if(readResult){
            this.books = readResult
            console.log( '-'.repeat(5), 'Books', '-'.repeat(5));
        }
        if(!this.books.length){
            console.log('No books found. \n');
        } else {
            this.books.forEach((book: Book) => {   
                console.log(`
            ID: ${book.Id},
            Title: ${book.Title},
            Author: ${book.Author}
            Year: ${book.Year},
            `)
            })
        }
        rls.keyInPause('\n')
    }


    menu(){
        mainMenu()
    }

}