export class Employee {
    // firstName: string;
    // lastName: string;
    // private currentSalary: number;

    // typescript allows scoping modifiers in constructors, no code needed
    constructor(public firstName: string, public lastName: string, private currentSalary: number) {
        // this.firstName = firstName;
        // this.lastName = lastName;
        // this.currentSalary = salary;
    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    get salary(): number {
        return this.currentSalary;
    }

    giveRaise(amount: number) {
        this.currentSalary += amount;
    }
}
