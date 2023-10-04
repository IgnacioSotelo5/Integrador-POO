export class LibraryItem{
    private id: string;
    private title: string;
    private year: number;
    private isAvailable: boolean;

    constructor(title: string, year: number, id: string){
        this.id = id;
        this.title = title;
        this.year = year;
        this.isAvailable = true;
    }
    get Id(){
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
}