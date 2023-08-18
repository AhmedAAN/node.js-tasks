class Rectangle {
    private length : number;
    private width : number;

    constructor(length : number = 1.0, width : number = 1.0) {
        this.length = length;
        this.width = width;
    }


    set Length(length : number){
        this.length = length;
    }
    get Length(): number{
        return this.length;
    }

    set Width(width : number){
        this.width = width;
    }
    get Width(): number{
        return this.width;
    }

    public getArea() : number {
        return this.length * this.width;
    }
    public getPrimeter() : number {
        return (this.length + this.width) * 2;
    }

    public toString() : string {
        return `Rectangle[length=${this.length},width=${this.width}]`;
    }
}








class Employee {
    private id : number;
    private firstName : string;
    private lastName : string;
    private salary : number;
    
    constructor(id : number, firstName : string, lastName : string, salary : number) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    get ID() : number{
        return this.id;
    }
    get FirstName() : string{
        return this.firstName;
    }
    get LastName() : string{
        return this.lastName;
    }
    get Name() : string{
        return `${this.firstName} ${this.lastName}`;
    }
    get Salary() : number{
        return this.salary;
    }
    set Salary(salary : number){
        this.salary = salary;
    }
    public getAnnualSalary() : number{
        return this.salary * 12;
    }
    public raiseSalary(percent : number) : number{
        let raise = this.salary * percent;
        let newSalary = this.salary + raise;

        return newSalary;
    }
    public toString() : string{
        return `Employee[id=${this.id},name=${this.firstName} ${this.lastName},salary=${this.salary}]`;
    }
}