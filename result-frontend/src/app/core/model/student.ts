export class Student {
    roll_no: string;
    name: string;
    dob: Date;
    score: number;
    mark1:number;
    mark2:number;
    mark3:number;
    mark4:number;
    mark5:number;
    percentage:number;

    constructor(roll_no: string, name: string, dob: Date, mark1:number,mark2:number,mark3:number,mark4:number,mark5:number,percentage:number,score: number) {
        this.roll_no = roll_no;
        this.name = name;
        this.dob = dob;
        this.mark1=mark1;
        this.mark2=mark2;
        this.mark3=mark3;
        this.mark4=mark4;
        this.mark5=mark5;
        this.percentage=percentage;
        this.score = score;
    }
}