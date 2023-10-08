import { LibraryItem } from "./LibraryItem";
export interface magazineObject{
    id: string;
    editorial: string
    title: string;
    year:number;
    isAvailable: boolean
}
export class Magazine extends LibraryItem{
    private editorial: string;
    type = 'Magazine'

    constructor(editorial: string, title: string, year: number, id: string, isAvailable: boolean = true){
        super(title, year, id, isAvailable)

        this.editorial = editorial;
        this.type

    }

    get Editorial(){
        return this.editorial
    }
    set Editorial(editorial: string){
        this.editorial = editorial
    }
    static magazineFromData(data: magazineObject): Magazine{
        const magazine = new Magazine(data.editorial, data.title, data.year, data.id, data.isAvailable)
        return magazine
    }
}