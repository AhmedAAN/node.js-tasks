// -------------- Question 1 --------------
// ------------------- 1 ------------------
// Hoisting is a JavaScript mechanism where variables and function
// declarations are moved to the top of their scope before code execution.

// ------------------- 2 ------------------
// to access the properities and functions of the parnet class.

// ------------------- 3 ------------------
// var and let create variables that can be reassigned another value.
// const creates "constant" variables that cannot be reassigned another value.

// ------------------- 4 ------------------

// ------------------- 5 ------------------

// ------------------- 6 ------------------

// ------------------- 7 ------------------

// ------------------- 8 ------------------

// -------------- Question 2 --------------
// ------------------- 1 ------------------
// true

// ------------------- 2 ------------------
// flase

// ------------------- 3 ------------------
// true

// ------------------- 4 ------------------
// false

// ------------------- 5 ------------------
// false

// ------------------- 6 ------------------
// true

// ------------------- 7 ------------------
// true

// ------------------- 8 ------------------
// true

// -------------- Question 3 --------------
// ------------------- 1 ------------------
// 2

// ------------------- 2 ------------------
// 3

// -------------- Question 4 --------------
// ------------------- 1 ------------------
// Error: The Fails
// The Fails
// The Fails

// ------------------- 2 ------------------
// error: getFullName is not a function

// ------------------- 3 ------------------
// 6
// 8

// ------------------- 4 ------------------
// error: colorChange is not a function

// ------------------- 5 ------------------
// boolean
// string

// ------------------- 6 ------------------
// 0
// 1
// 4
// 2
// 3

// ------------------- 7 ------------------
// refrence error: i is not defined

// ------------------- 8 ------------------
// "hello world"
// 10

// ------------------- 9 ------------------
// [59.52, 83.7, 93]

// ------------------ 10 ------------------
// ['Batman', 'Bane']

// -------------- Question 5 --------------
// ------------------- 1 ------------------
function stringLength(str: string, count: number = 0) {
  if (str[0]) {
    count++;
    count = stringLength(str.substring(1), count);
  }
  return count;
}
// ------------------- 2 ------------------
function multiplicationTable(num: number) {
  for (let i = 1; i <= num; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}

// ------------------- 3 ------------------
function oddPostions(list: Array): Array {
  const arrayOfOdds = [];
  for (let i = 0; i < list.length; i++) {
    if (i % 2 == 0) {
      arrayOfOdds.push(list[i]);
    }
  }
  return arrayOfOdds;
}

// ------------------- 4 ------------------
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

// ------------------- 5 ------------------
// no JavaScript code needed

// ------------------- 6 ------------------
function numberOfVowls(str: string) {
  const vowls = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let letter of str.toLowerCase()) {
    if (vowls.includes(letter)) {
      count++;
    }
  }
  return count;
}

// ------------------- 7 ------------------
class Animal {
  protected name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }
  set name(name: string) {
    this.name = name;
  }
  set age(age: number) {
    this.age = age;
  }
}

class Zebra extends Animal {
  private placeOfOrigin: string;

  constructor(name: string, age: number, placeOfOrigin: string) {
    super(name, age);
    this.placeOfOrigin = placeOfOrigin;
  }
  set placeOfOrigin(placeOfOrigin: string) {
    this.placeOfOrigin = placeOfOrigin;
  }
  public toString(): string {
    return `Zebra[name=${super.name},age=${super.age},place of origin${
      this.placeOfOrigin
    }]`;
  }
}

class Dolphin extends Animal {
  private placeOfOrigin: string;

  constructor(name: string, age: number, placeOfOrigin: string) {
    super(name, age);
    this.placeOfOrigin = placeOfOrigin;
  }
  set placeOfOrigin(placeOfOrigin: string) {
    this.placeOfOrigin = placeOfOrigin;
  }
  public toString(): string {
    return `Dolphin[name=${super.name},age=${super.age},place of origin${
      this.placeOfOrigin
    }]`;
  }
}
// ------------------- 8 ------------------

// ------------------- 9 ------------------
// no JavaScript code needed

// ------------------ 10 ------------------
abstract class Shape {
  protected color: string;
  protected filled: boolean;

  constructor(color: string = "red", filled: boolean = true) {
    this.color = color;
    this.filled = filled;
  }
  get Color(): string {
    return this.color;
  }
  set Color(color: string) {
    this.color = color;
  }

  get Filled(): boolean {
    return this.filled;
  }
  set Filled(filled: boolean) {
    this.filled = filled;
  }
  public abstract getArea(): number;
  public abstract getPrimeter(): number;
  public toString(): string {
    return `Shape[color=${this.color},filled=${this.filled}}]`;
  }
}

class Circle extends Shape {
  protected radius: number;

  constructor(color: string, filled: boolean, radius: number) {
    super(color, filled);
    this.radius = radius;
  }
  get Radius(): number {
    return this.radius;
  }
  set Radius(radius: number) {
    this.radius = radius;
  }

  public getArea(): number {
    return this.radius ** 2 * Math.PI;
  }
  public getPrimeter(): number {
    return 2 * Math.PI * this.radius;
  }

  public toString(): string {
    return `Circle[${super.toString()},radius=${this.radius}]`;
  }
}

class Rectangle extends Shape {
  protected width: number;
  protected length: number;

  constructor(color: string, filled: boolean, width: number, length: number) {
    super(color, filled);
    this.width = width;
    this.length = length;
  }

  get Width(): number {
    return this.width;
  }
  set Width(width: number) {
    this.width = width;
  }

  get Length(): number {
    return this.length;
  }
  set Length(length: number) {
    this.length = length;
  }

  public getArea(): number {
    return this.width * this.length;
  }

  public getPrimeter(): number {
    return (this.length + this.width) * 2;
  }

  public toString(): string {
    return `Rectangle[${super.toString()},width=${this.width},length=${
      this.length
    }]`;
  }
}

class Square extends Rectangle {
  constructor(side: number, color: string, filled: boolean) {
    super(color, filled, side, side);
  }
  get Side(): number {
    return this.length;
  }
  set Side(side: number) {
    this.length = side;
    this.width = side;
  }
  set Width(side: number) {
    this.width = side;
  }
  set Length(side: number) {
    this.length = side;
  }

  public toString(): string {
    return `Square[${super.toString()}]`;
  }
}
