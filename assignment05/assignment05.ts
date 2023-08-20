// ---------------- 1.1 ----------------
class Circle {
    private radius : number;
    private color : string;

    constructor(radius : number = 1.0, color : string = "red"){
        this.radius = radius;
        this.color = color;
    }
    get Radius() : number {
        return this.radius;
    }
    set Radius(radius : number) {
        this.radius = radius;
    }

    get Color() : string {
        return this.color;
    }
    set Color(color : string) {
        this.color = color;
    }
    public getArea() : number {
        return (this.radius ** 2) * Math.PI;
    }

    public toString() : string {
        return `Circle[radius=${this.radius},color=${this.color}]`;
    }
}

// ---------------- 1.2 ----------------
class Circle2 {
    private radius : number;
    constructor(radius : number) {
        this.radius = radius;
    }
    get Radius() : number {
        return this.radius;
    }
    set Radius(radius : number) {
        this.radius = radius;
    }
    public getArea() : number {
        return (this.radius ** 2) * Math.PI;
    }
    public getCircumference() : number {
        return 2 * this.radius * Math.PI;
    }
    public toString() : string {
        return `Circle[radius=${this.radius}]`;
    }
}

// ---------------- 1.3 ----------------
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

// ---------------- 1.4 ----------------
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
        let raise = this.salary * (percent / 100);
        let newSalary = this.salary + raise;

        return newSalary;
    }
    public toString() : string{
        return `Employee[id=${this.id},name=${this.firstName} ${this.lastName},salary=${this.salary}]`;
    }
}

// ---------------- 1.5 ----------------
class InvoiceItem {
    private id : string;
    private desc : string;
    private qty : number;
    private unitPrice : number;

    constructor(id : string, desc : string, qty : number, unitPrice : number) {
        this.id = id;
        this.desc = desc;
        this.qty = qty;
        this.unitPrice = unitPrice;
    }
    get ID() : string {
        return this.id;
    }
    get Desc() : string {
        return this.desc;
    }
    get Qty() : number {
        return this.qty;
    }
    set Qty(qty : number) {
        this.qty = qty;
    }
    get UnitPrice() : number {
        return this.unitPrice;
    }
    set UnitPrice(unitPrice : number) {
        this.unitPrice = unitPrice;
    }
    public getTotal() : number {
        return this.qty * this.unitPrice;
    }
    public toString() : string {
        return `InvoiceItem[id=${this.id},desc=${this.desc},qty=${this.qty},unitPrice=${this.unitPrice}]`
    }
}

// ---------------- 1.6 ----------------
class Account {
    private id : string;
    private name : string;
    private balance : number;

    constructor(id : string, name : string, balance : number = 0) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    get ID() : string {
        return this.id;
    }
    get Name() : string {
        return this.name;
    }
    get Balance() : number {
        return this.balance;
    }
    public credit(amount : number) : number {
        this.balance += amount;
        return this.balance;
    }
    public debit(amount : number) : number {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Amount exceeded balance");
        }
        return this.balance;
    }
    public transferTo(another : Account, amount : number) : number {
        if (amount <= this.balance) {
            another.credit(amount);
            this.balance -= amount;
        }
        else {
            console.log("Amount exceeded balance");
        }
        return this.balance;
    }
    public toString() : string {
        return `Account[id=${this.id},name=${this.name},balance=${this.balance}]`;
    }
}

// ---------------- 1.7 ----------------
class Date {
    private day : number;
    private month : number;
    private year : number;

    constructor(day : number, month : number, year : number) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    get Day() : number {
        return this.day;
    }
    set Day(day : number) {
        this.day = day;
    }
    get Month() : number {
        return this.month;
    }
    set Month(month : number) {
        this.month = month;
    }
    get Year() : number {
        return this.year;
    }
    set Year(year : number) {
        this.year = year;
    }
    public setDate(day : number, month : number, year : number) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    public toString() : string {
        let newDay = ("00" + this.day).slice(-2);
        let newMonth = ("00" + this.month).slice(-2);
        let newYear = ("0000" + this.year).slice(-4);
        return `${newDay}/${newMonth}/${newYear}`;
    }
}

// ---------------- 1.8 ----------------
class Time {
    private hour : number;
    private minute : number;
    private second : number;

    constructor(hour : number, minute : number, second : number) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }

    get Hour() : number {
        return this.hour;
    }
    set Hour(hour : number) {
        this.hour = hour;
    }

    get Minute() : number {
        return this.minute;
    }
    set Minute(minute : number) {
        this.minute = minute;
    }

    get Second() : number {
        return this.second;
    }
    set Second(second : number) {
        this.second = second;
    }

    public setTime(hour : number, minute : number, second : number) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }
    public toString() : string {
        let newHour = ("00" + this.hour).slice(-2);
        let newMinute = ("00" + this.minute).slice(-2);
        let newSecond = ("00" + this.second).slice(-2);
        return `${newHour}:${newMinute}:${newSecond}`;
    }
    public nextSecond() : Time {
        if (this.second == 59) {
            this.second = 0;
            if (this.minute == 59) {
                this.minute = 0;
                if (this.hour == 23) {
                    this.hour = 0;
                }
                else {
                    this.hour += 1;
                }
            }
            else {
                this.minute += 1;
            }
        }
        else {
            this.second += 1;
        }
        return this;
    }
    public previousSecond() : Time {
        if (this.second == 0) {
            this.second = 59;
            if (this.minute == 0) {
                this.minute = 59;
                if (this.hour == 0) {
                    this.hour = 23;
                }
                else {
                    this.hour -= 1;
                }
            }
            else {
                this.minute -= 1;
            }
        }
        else {
            this.second -= 1;
        }
        return this;
    }
}

// ---------------- 1.9 ----------------
class Ball {
    private x : number;
    private y : number;
    private radius : number;
    private xDelta : number;
    private yDelta : number;

    constructor (x : number, y : number, radius : number, xDelta : number, yDelta : number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.xDelta = xDelta;
        this.yDelta = yDelta;
    }

    get X() : number {
        return this.x;
    }
    set X(x : number) {
        this.x = x;
    }

    get Y() : number {
        return this.x;
    }
    set Y(y : number) {
        this.y = y;
    }
    
    get Radius() : number {
        return this.radius;
    }
    set Radius(radius : number) {
        this.radius = radius;
    }

    get XDelta() : number {
        return this.xDelta;
    }
    set XDelta(xDelta : number) {
        this.xDelta = xDelta;
    }

    get YDelta() : number {
        return this.yDelta;
    }
    set YDelta(yDelta : number) {
        this.yDelta = yDelta;
    }

    public Move() {
        this.x += this.xDelta;
        this.y += this.yDelta;
    }
    public ReflectHorizontal() {
        this.x += this.xDelta;
    }
    public ReflectVertical() {
        this.y += this.yDelta;
    }
    public toString() : string {
        return `Ball[(${this.x},${this.y}),speed=(${this.xDelta},${this.yDelta})]`;
    }
}