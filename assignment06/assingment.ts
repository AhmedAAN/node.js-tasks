// -------------------- 4.2 --------------------
class Person {
    private name : string;
    private address : string;

    constructor(name : string, address : string) {
        this.name = name;
        this.address = address;
    }
    get Name() : string {
        return this.name;
    }
    get Address() : string {
        return this.address;
    }
    set Address(address : string) {
        this.address = address;
    }
    public toString() {
        return `Person[name=${this.name},address=${this.address}]`;
    }
}

class Student extends Person{
    private program : string;
    private year : number;
    private fee : number;

    constructor(name : string, address : string, program : string, year : number, fee : number) {
        super(name, address);
        this.program = program;
        this.year = year;
        this.fee = fee;
    }
    get Program() : string {
        return this.program;
    }
    set Program(program : string) {
        this.program = program;
    }

    get Year() : number {
        return this.year;
    }
    set Year(year : number) {
        this.year = year;
    }

    get Fee() : number {
        return this.fee;
    }
    set Fee(fee : number) {
        this.fee = fee;
    }
    public toString() : string {
        return `Student[${super.toString()},program=${this.program},year=${this.year},fee=${this.fee}]`;
    }
}

class Staff extends Person {
    private school : string;
    private pay : number;

    constructor(name : string, address : string, school : string, pay : number) {
        super(name, address);
        this.school = school;
        this.pay = pay;
    }

    get School() : string {
        return this.school;
    }
    set School(school : string) {
        this.school = school;
    }

    get Pay() : number {
        return this.pay;
    }
    set Pay(pay : number) {
        this.pay = pay;
    }
}

// -------------------- 6.1 --------------------
abstract class Shape {
    protected color : string;
    protected filled : boolean;

    constructor(color : string = "red", filled : boolean = true) {
        this.color = color;
        this.filled = filled;
    }
    get Color() : string {
        return this.color;
    }
    set Color(color : string) {
        this.color = color;
    }

    get Filled() : boolean {
        return this.filled;
    }
    set Filled(filled : boolean) {
        this.filled = filled;
    }
    public abstract getArea() : number;
    public abstract getPrimeter() : number;
    public toString() : string {
        return `Shape[color=${this.color},filled=${this.filled}}]`;
    }
}

class Circle extends Shape {
    protected radius : number;

    constructor(color : string, filled : boolean, radius : number) {
        super(color, filled);
        this.radius = radius;
    }
    get Radius() : number {
        return this.radius;
    }
    set Radius(radius : number) {
        this.radius = radius;
    }
    
    public getArea(): number {
        return (this.radius ** 2) * Math.PI;
    }
    public getPrimeter(): number {
        return (2 * Math.PI * this.radius);
    }

    public toString(): string {
        return `Circle[${super.toString()},radius=${this.radius}]`;
    }
}

class Rectangle extends Shape {
    protected width : number;
    protected length : number;

    constructor(color : string, filled : boolean, width : number, length : number) {
        super(color, filled);
        this.width = width;
        this.length = length;
    }

    get Width() : number {
        return this.width;
    }
    set Width(width : number) {
        this.width = width;
    }

    get Length() : number {
        return this.length;
    }
    set Length(length : number) {
        this.length = length;
    }
    
    public getArea(): number {
        return this.width * this.length;
    }

    public getPrimeter(): number {
        return (this.length + this.width) * 2;
    }

    public toString(): string {
        return `Rectangle[${super.toString()},width=${this.width},length=${this.length}]`;
    }
}

class Square extends Rectangle {
    constructor(side : number, color : string, filled : boolean) {
        super(color, filled, side, side);
    }
    get Side() : number {
        return this.length;
    }
    set Side(side : number) {
        this.length = side;
        this.width = side;
    }
    set Width(side : number) {
        this.width = side;
    }
    set Length(side : number) {
        this.length = side;
    }

    public toString(): string {
        return `Square[${super.toString()}]`;
    }
}

// -------------------- 6.2 --------------------
interface GeometricObject {
    getArea() : number;
    getPrimeter() : number;
}

class Circle implements GeometricObject {
    private radius : number;
    
    constructor(radius : number) {
        this.radius = radius;
    }
    public toString() : string {
        return `Circle[${this.radius}]`;
    }
    getArea(): number {
        return (this.radius ** 2) * Math.PI;
    }
    getPrimeter(): number {
        return (2 * this.radius * Math.PI);
    }
}

class Rectangle implements GeometricObject {
    private width : number;
    private length : number;

    constructor(width : number, length : number) {
        this.width = width;
        this.length = length;
    }
    public toString() : string {
        return `Rectangle[width=${this.width},length=${this.width}]`;
    }
    getArea(): number {
        return this.length * this.width;
    }
    getPrimeter(): number {
        return (this.length + this.width) * 2;
    }
}