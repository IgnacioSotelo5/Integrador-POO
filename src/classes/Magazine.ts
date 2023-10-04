import { LibraryItem } from "./LibraryItem";

export class Magazine extends LibraryItem{
    private editorial: string;

    constructor(editorial: string, title: string, year: number, id: string){
        super(title, year, id)

        this.editorial = editorial;
    }

    get Editorial(){
        return this.editorial
    }
    set Editorial(editorial: string){
        this.editorial = editorial
    }
}