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
    scoring: number;
    isPenalized: boolean;
    penalizedUntil?: Date;
}

export class User {
    private id: string;
    private name: string;
    private address: iAddress;
    private phoneNumber: string;
    private scoring: number;
    private isPenalized: boolean;
    private penalizedUntil?: Date;

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
        if(this.scoring > 6){
            this.penalizeUser()
        }
    }
    decreaseScoring(points: number){
        this.scoring -= points
    }
    get IsPenalized(){
        return this.isPenalized
    }
    penalizeUser(){
        this.isPenalized = true
        const now = new Date();
        const sevenDaysLater = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)
        this.penalizedUntil = sevenDaysLater
    }
    checkPenalty(){
        if(this.IsPenalized && this.penalizedUntil){
            const now = new Date()
            if(now.getTime() > this.penalizedUntil.getTime()){
                this.isPenalized = false
                this.penalizedUntil = undefined
            }
        }
    }
    static userFromData(data: User | UserObject): User {
        if (data instanceof User) {
            return data;
        } else {
            const item = new User(data.id, data.name, data.address, data.phoneNumber);
            item.scoring = data.scoring;
            item.isPenalized = data.isPenalized;
            item.penalizedUntil = data.penalizedUntil;
            return item;
        }
    }

}