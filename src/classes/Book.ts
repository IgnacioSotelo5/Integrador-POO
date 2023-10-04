import { LibraryItem } from "./LibraryItem";

export class Book extends LibraryItem{
    private author: string;

    constructor(author: string, title: string, year: number, id: string){
        super(title, year, id)
        this.author = author;
    }
    get Author(){
        return this.author
    }
    set Author(author: string){
        this.author = author
    }
}