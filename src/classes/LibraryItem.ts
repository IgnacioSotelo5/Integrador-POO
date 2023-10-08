export interface libraryItemObject{
    id: string;
    title: string;
    year: number
    isAvailable: boolean

}
export class LibraryItem{
    private id: string;
    private title: string;
    private year: number;
    private isAvailable: boolean;
    type = 'LibraryItem';


    constructor(title: string, year: number, id: string, isAvailable: boolean = true){
        this.id = id;
        this.title = title;
        this.year = year;
        this.isAvailable = isAvailable;
    }
    get ID(){
        return this.id
    }
    get Title(){
        return this.title
    }
    set Title(title: string){
        this.title = title
    }
    get Year(){
        return this.year
    }
    set Year(year: number){
        this.year = year
    }

    get ItemAvailability(): boolean{
        return this.isAvailable
    }
    markAsUnavailable(){
        this.isAvailable = false;
    }
    markAsAvailable(){
        this.isAvailable = true;
    }
    static itemFromData(data: LibraryItem | libraryItemObject): LibraryItem {
        if (data instanceof LibraryItem) {
            return data;
        } else {
            const item = new LibraryItem(data.title, data.year, data.id, data.isAvailable);
            return item;
        }
    }
    getType(){
        return 'LibraryItem'
    }
}