import { Book } from "./Book";
import { Loan } from './Loan'
import { Magazine } from "./Magazine";
import { User } from "./User";
import { mainMenu } from "../menu/mainMenu";
import { FileManager } from "../utils/FileManager";
import { randomUUID } from "crypto";
import { LibraryItem } from "./LibraryItem";
import * as rls from 'readline-sync'

export class Library {
     items: LibraryItem[];
     loans: Loan[];
     users: User[];

    constructor(){
        this.items = []
        this.loans = []
        this.users = []
    }

    //Users management
    
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

    //Magazines management

     createMagazine(){
        const readResult = FileManager.readFile('items')
        if(readResult){
            this.items = readResult
        }
        const data = {
            id: randomUUID(),
            editorial: rls.question('Add the editorial of the magazine: '),
            title: rls.question('Add the title of the magazine: '),
            year: rls.questionInt('Add the year of the magazine: ')
        }
        const newMagazine = new Magazine(data.editorial, data.title, data.year, data.id)
        this.items.push(newMagazine)
        FileManager.appendToFile(this.items, 'items')
        console.log(this.items);
        rls.keyInPause('\n')
    }
   
     updateMagazine(){
        const readResult = FileManager.readFile('items')
        if(readResult){
            this.items = readResult
        }
        const idToUpdate = rls.question('Enter the ID of the magazine to Update: ')
        const magazineIndex = this.items.findIndex((item) => item.ID === idToUpdate)

        if (magazineIndex !== -1){
            const magazineToUpdate = this.items[magazineIndex] as Magazine
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
            FileManager.appendToFile(this.items, 'items')
        } else{
            console.log(`Update cancelled. ${magazineToUpdate.Title} not updated.\n`);
        }
    }
    }
     deleteMagazine(){
        const idToDelete = rls.question('Enter the ID of the book to Delete: ')
        const magazineIndex = this.items.findIndex((item) => item.ID === idToDelete)

        if (magazineIndex !== -1){
            const magazineToDelete = this.items[magazineIndex]
            const confirmation = rls.keyInYN(`Do you want to update ${magazineToDelete.Title}`)
        
            if(confirmation){
            this.items.splice(magazineIndex, 1)
            FileManager.appendToFile(this.items, 'items')
        } else{
            console.log('Deletion canceled.');
        }
    }
    }
     showMagazines(){
        const readResult = FileManager.readFile('items')
        
        if(readResult){
            this.items = readResult
            console.log( '-'.repeat(5), 'Magazines', '-'.repeat(5));
        }
        if(!this.items.length){
            console.log('No magazines found. \n');
        } else {
            this.items.forEach((item) => {   
                if(item instanceof Magazine){
                    console.log(`
                    ID: ${item.ID},
                    Title: ${item.Title},
                    Editorial: ${item.Editorial}
                    Year: ${item.Year},
                    `)
                }
                })
        }
        rls.keyInPause('\n')
        
    }

    //Book management

     createBook(){
        const readResult = FileManager.readFile('items')
        if(readResult){
            this.items = readResult
        }
        const data = {
            id: randomUUID(),
            author: rls.question('Add the author of the book: '),
            title: rls.question('Add the title of the book: '),
            year: rls.questionInt('Add the year of the book: ')
        }
        const newBook = new Book(data.author, data.title, data.year, data.id)
        this.items.push(newBook)
        FileManager.appendToFile(this.items, 'items')
        console.log(this.items);
        rls.keyInPause('\n')
    }

     updateBook(){
        const readResult = FileManager.readFile('items')
        if(readResult){
            this.items = readResult
        }
        const idToUpdate = rls.question('Enter the ID of the book to Update: ')
        const bookIndex = this.items.findIndex((book) => book.ID === idToUpdate)

        if (bookIndex !== -1){
            const bookToUpdate = this.items[bookIndex] as Book
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
            FileManager.appendToFile(this.items, 'items')
        } else{
            console.log(`Update cancelled. ${bookToUpdate.Title} not updated.\n`);
        }
    }
    }
     deleteBook(){
        const idToDelete = rls.question('Enter the ID of the book to Delete: ')
        const bookIndex = this.items.findIndex((book) => book.ID === idToDelete)

        if (bookIndex !== -1){
            const bookToDelete = this.items[bookIndex]
            const confirmation = rls.keyInYN(`Do you want to update ${bookToDelete.Title}`)
        
            if(confirmation){
            this.items.splice(bookIndex, 1)
            FileManager.appendToFile(this.items, 'items')
        } else{
            console.log('Deletion canceled.');
        }
    }
}    
     showBooks(){
        const readResult = FileManager.readFile('items')
        
        if(readResult){
            this.items = readResult
            console.log( '-'.repeat(5), 'Books', '-'.repeat(5));
        }
        if(!this.items.length){
            console.log('No books found. \n');
        } else {
            this.items.forEach((item) => { 
                if(item instanceof Book){
                    console.log(`
                    ID: ${item.ID},
                    Title: ${item.Title},
                    Author: ${item.Author}
                    Year: ${item.Year},
                    `)
                }  
            })
        }
        rls.keyInPause('\n')
    }

    // Loans management

    lendItem(){
        const readResult = FileManager.readFile('loans')
        const readItems = FileManager.readFile('items')
        const readUsers = FileManager.readFile('users')
        if(readResult && readItems && readUsers){
            this.loans = readResult
            this.items = readItems
            this.users = readUsers
        }
        const userID: string = rls.question('Enter user ID: ')
        const itemID: string = rls.question('Enter item ID: ')
        const user = this.users.find((user) => user.ID === userID)
        const item= this.items.find((item) => item.ID === itemID)

         if(user && item){

             if(item.ItemAvailability === false || user.IsPenalized === true) {
                 console.log('Item not available or user disabled'); 
                 return
             } else{
                 item.markAsUnavailable()
                 FileManager.appendToFile(this.items, 'items')
                 const newLoan = new Loan(item, user)
                 this.loans.push(newLoan)
                 FileManager.appendToFile(this.loans, 'loans')
             }
          }else{
              console.log('Error making the loan. Verify item and user');
          }   
     }

    returnItem(){
        const readResult = FileManager.readFile('loans')
        const readUsers = FileManager.readFile('users')
        const readItems = FileManager.readFile('items')
        if(readResult && readItems && readUsers){
            this.loans = readResult
            this.users = readUsers
            this.items = readItems
        }
        const itemID = rls.question('Enter the item ID: ')
        const userID = rls.question('Enter the user ID: ');
        const date = rls.question('Enter the return date(mm/dd/yyyy): ')
        const returnDate = new Date(date);
        const itemLoan = this.items.find((item) => item.ID === itemID);
        const userLoan = this.users.find((user) => user.ID === userID);
    
        if(itemLoan && userLoan){
             const loan = this.findActiveLoan(itemLoan, userLoan)             
             if(!loan){
                 throw new Error('Unregistered loan. Make sure the title and username are correct.')
             } 
             itemLoan.markAsAvailable()
             const dueDate = loan.DueDate
            
            if(returnDate > dueDate){
                const lateDays = Math.ceil((returnDate.getTime() - dueDate.getTime()) / (1000 * 3600 * 24))
                let lateFee: number = 0;

                switch (true) {
                    case (lateDays === 1):
                        lateFee = 2
                        break;
                        case (lateDays >= 2 && lateDays < 5):
                            lateFee = 3
                            break;
                            case (lateDays >= 5 && lateDays <=10):
                                lateFee = 6
                                break;
                                case(lateDays > 10): 
                                userLoan.penalizeUser()
                                break;
                                default:
                                    break;
                                }                                
                                userLoan.increaseScoring(lateFee)
                                userLoan.checkPenalty()
                                
                    console.log(`${userLoan.Name} returned ${itemLoan.Title} after ${lateDays} days. ${lateFee} points penalty.`);

                } else{
                    console.log(`${userLoan.Name} returned ${itemLoan.Title} on time.`);
                    if(userLoan.Scoring > 0 ){
                        userLoan.decreaseScoring(1)
                        console.log('The user deducts one point from the scoring because they returned the item on time.');
                        
                    }
                }
                this.loans = this.loans.filter((delLoan) => delLoan !== loan)
                this.users = this.users.map(user => user.ID === userLoan.ID ? userLoan : user)
                this.items = this.items.map(item => item.ID === itemLoan.ID ? itemLoan : item)
                FileManager.appendToFile(this.users, 'users')
                FileManager.appendToFile(this.items, 'items')
                FileManager.appendToFile(this.loans, 'loans')
                console.log(`User ${userLoan.Name} returned ${itemLoan.Title} on ${returnDate.toLocaleDateString()}`);
            } else {
             console.log('Error finding the loan.');
         }

    }

    showActiveLoans(){
        const readResult = FileManager.readFile('loans')        
        if(readResult){
            this.loans = readResult
            console.log( '-'.repeat(5), 'Active Loans', '-'.repeat(5));
        }
        if(!this.loans.length){
            console.log('No loans found. \n');
        } else {
            this.loans.forEach((loan: Loan) => {   
                console.log(`
                    ID: ${loan.ID},

                        Item: ${loan.Item && loan.Item.Title ? loan.Item.Title : 'Item not found'} (${loan.Item.ID}),

                        User: ${loan.User && loan.User.Name ? loan.User.Name : 'User not found'} (${loan.User.ID}),

                    Loan date: ${loan.LoanDate.toLocaleDateString()},
                    Due date: ${loan.DueDate.toLocaleDateString()}
                `)
            })
        }
        rls.keyInPause('\n')
    }

    showScoringList(){
        const users = FileManager.readFile('users')
        if(users){
            this.users = users
            console.log('User scoring list');
            
        }
        if(!this.users.length){
            console.log('No users found');
        } 
        this.users.sort((a, b) => b.Scoring - a.Scoring ).forEach((user) => {
            console.log(
                `
                Username: ${user.Name},
                Scoring: ${user.Scoring}
                ${user.IsPenalized ? 'User penalized' : 'Enabled user'}
                `
            );
            
        })
    }

    private findActiveLoan(item: LibraryItem, user: User): Loan | undefined{
        return this.loans.find((loan) => loan.Item.ID === item.ID && loan.User.ID === user.ID)
    }
    menu(){
        mainMenu()
    }

}