import { randomUUID } from "crypto";
import { LibraryItem } from "./LibraryItem";
import { User } from "./User";

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
          this.dueDate.setDate(this.loanDate.getDate() + 7);
        }
      
        getId(): string {
          return this.id;
        }
        getItem(): LibraryItem {
          return this.item;
        }
        getUser(): User {
          return this.user;
        }
        getLoanDate(): Date {
          return this.loanDate;
        }
        getDueDate(): Date {
          return this.dueDate;
        }
}
