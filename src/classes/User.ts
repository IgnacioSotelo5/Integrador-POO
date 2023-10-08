export interface iAddress{
    street: string;
    number: number;
    apartment?: string;
}
export interface UserObject {
    id: string;
    name: string;
    address: iAddress;
    phoneNumber: string;
}

export class User {
    private id: string;
    private name: string;
    private address: iAddress;
    private phoneNumber: string;
    private scoring: number;
    private isPenalized: boolean;

    constructor(id: string, name: string, address: iAddress, phoneNumber: string) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.scoring = 0;
        this.isPenalized = false;
    }

    get ID(){
        return this.id
    }
    get Name(){
        return this.name
    }
    set Name(name: string){
        this.name = name
    }
    get Address(): iAddress{
        return ({
            street: this.address.street,
            number: this.address.number,
            apartment: this.address.apartment,
        }
            )
    }
    set Address(address: iAddress){
        this.address = address
    }
    get PhoneNumber(){
        return this.phoneNumber
    }
    set PhoneNumber(phoneNumber: string){
        this.phoneNumber = phoneNumber
    }
    get Scoring(){
        return this.scoring
    }
    increaseScoring(points: number){
        this.scoring += points
    }
    decreaseScoring(points: number){
        this.scoring -= points
    }
    get IsPenalized(){
        return this.isPenalized
    }
    markAsPenalized(){
        this.isPenalized = true
    }
    static userFromData(data: User | UserObject): User {
        if (data instanceof User) {
            return data;
        } else {
            const item = new User(data.id, data.name, data.address, data.phoneNumber);
            return item;
        }
    }

}