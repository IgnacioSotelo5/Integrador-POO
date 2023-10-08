import { randomUUID } from "crypto";
import { LibraryItem } from "./LibraryItem";
import { User } from "./User";

export interface loanObject{
  item: LibraryItem;
  user: User;
  loanDate: string;
  dueDate: string;
}
export class Loan{
        private id: string = randomUUID();
        private item: LibraryItem;
        private user: User;
        private loanDate: Date;
        private dueDate: Date;
      
        constructor(item: LibraryItem, user: User) {
          this.item = item;
          this.user = user;
          this.loanDate = new Date();
          this.dueDate = new Date();
          this.dueDate.setDate(this.loanDate.getDate() + 7).toLocaleString();
          this.loanDate.toLocaleDateString()
          
        }
      
        get ID(): string {
          return this.id;
        }
        get Item(): LibraryItem {
          return this.item;
        }
        get User(): User {
          return this.user;
        }
        get LoanDate(): Date {
          return this.loanDate;
        }
        get DueDate(): Date {
          return this.dueDate;
        }
        
        static loanFromData(data: loanObject): Loan {
          const item = LibraryItem.itemFromData(data.item);
          const user = User.userFromData(data.user);
          const loan = new Loan(item, user);
          loan.loanDate = new Date(data.loanDate);
          loan.dueDate = new Date(data.dueDate);
          return loan;
      }
      
      
}
