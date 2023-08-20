//Ahmed Abdelmoniem Ahmed Nagy
//Node.js, Mansoura university


//-------------- Question 1 --------------
function checkOddOrEven(number) {
  if (number % 2 == 0) {
    console.log("Number is Even");
  }
  else {
    console.log("Number is Odd");
  }
}
//-------------- Question 2 --------------
function fizzbuzz() {
  let i;
  for (i = 1; i <= 15; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
      console.log("Fizz");
    }
    else if (i % 5 == 0) {
      console.log("Buzz");
    }
    else {
      console.log(i);
    }
  }
}
//-------------- Question 3 --------------
function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return (newString);
}
//-------------- Question 4 --------------
function calculateCircle(radius) {
  if (0 < radius) {
    console.log("The circumference of the circle is " + (radius * 2 * Math.PI));
    console.log("The area of the circle is " + (radius * radius * Math.PI));
  }
  else {
    console.log("Error - radius must be a whole number greater than 0.");
  }
}
//-------------- Question 5 --------------
function check50(num1, num2) {
  let sum = num1 + num2;
  if (num1 == 50 || num2 == 50 || sum == 50) {
    return (true);
  }
  return (false);
}
console.log(check50(50, 20));
//-------------- Question 6 --------------
function positiveNegative(x, y) {
  if ((x < 0 && y > 0) || x > 0 && y < 0) {
    return (true);
  }
  else {
    return (false);
  }
}
//-------------- Question 7 --------------
function multiableOf5Or8(x) {
  if (x % 5 == 0 || x % 8 == 0) {
    return (true);
  }
  else {
    return (false);
  }
}
//-------------- Question 8 --------------
function maxOfThree(x, y, z) {
  max_val = 0;
  if (x > y) {
    max_val = x;
  }
  else {
    max_val = y;
  }
  if (z > max_val) {
    max_val = z;
  }
  return (max_val);
}
//-------------- Question 9 --------------
function sumOf10() {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += i;
  }
  return (sum);
}
//-------------- Question 10 -------------
function printRightTriangle() {
  n = 5;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write("*");
    }
    console.log()
  }
}
//-------------- Question 11 -------------
function checkPosOrNeg(number) {
  if (number > 0) {
    console.log("Number is Positive");
  }
  else if (number < 0) {
    console.log("Number is Negative");
  }
  else {
    console.log("Number is Zero");
  }
}
//-------------- Question 12 -------------
function printArray() {
  const array = [1, 1, 2, 4, 5, 6, 7, 8, 9, 10];
  for (let i in array) {
    console.log("element -", i, ":", array[i]);
  }
}
//-------------- Question 13 -------------
function sum(x, y) {
  console.log(x + y);
}
//-------------- Question 14 -------------
function factorial(number) {
  let fact = 0;
  for (let i = number; i > 1; i--) {
    fact *= i;
  }
  console.log("The Factorial of", number, "is:", fact);
}
//-------------- Question 15 -------------
function calculator() {
  const operator = prompt("Enter operator ( either +, -, * or / ): ");
  const number1 = parseFloat(prompt("Enter first number: "));
  const number2 = parseFloat(prompt("Enter second number: "));

  let result;
  switch (operator) {
    case ('+'):
      result = number1 + number2;
      break;
    case ('-'):
      result = number1 - number2;
      break;
    case ('*'):
      result = number1 * number2;
      break;
    case ('/'):
      if (numer2 == 0) {
        console.log("Cannot devide by 0");
      }
      else {
        result = number1 / number2;
      }
      break;
    default:
      console.log("Please enter a valid operator");
  }
  console.log(`${number1} ${operator} ${number2} = ${result}`);
}
//----------------------------------------
