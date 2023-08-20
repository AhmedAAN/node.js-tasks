function calculator(num1, num2){
    function sum(){
        return num1 + num2
    }
    function sub(){
        return num1 - num2
    }
    function mul(){
        return num1 * num2
    }
    function div(){
        return num1 / num2
    }
    return [sum, sub, mul, div];
}
const [SUM, SUB, MUL, DIV] = calculator(100,4);
console.log(SUM()); //104
console.log(SUB()); //96
console.log(MUL()); //400
console.log(DIV()); //25
