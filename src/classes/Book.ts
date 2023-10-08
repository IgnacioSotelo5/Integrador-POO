import { LibraryItem } from "./LibraryItem";

export interface bookObject{
    id: string;
    author: string
    title: string;
    year:number;
    isAvailable: boolean
}
export class Book extends LibraryItem{
    private author: string;
    type = 'Book'

    constructor(author: string, title: string, year: number, id: string, isAvailable: boolean = true){
        super(title, year, id, isAvailable)
        this.author = author;
        this.type
    }
    get Author(){
        return this.author
    }
    set Author(author: string){
        this.author = author
    }
    static bookFromData(data: bookObject): Book{
        const book = new Book(data.author, data.title, data.year, data.id, data.isAvailable)
        return book
    }
}