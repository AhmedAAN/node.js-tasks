//Ahmed Abdelmoniem Ahmed Nagy
//Node.js, Mansoura university

//task 1

function fizzbuzz(){
    let i;
    for (i = 1; i <= 15; i++){
        if (i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz")
        }
        else if (i % 3 == 0){
            console.log("Fizz")
        }
        else if (i % 5 == 0){
            console.log("Buzz")
        }
        else{
            console.log(i);
        }
    }
}
fizzbuzz();

//task 5

function check50(num1, num2){
    let sum = num1 + num2;
    if (num1 == 50 || num2 == 50 || sum == 50){
        return (true)
    }
    return (false)
}
console.log(check50(50, 20));
