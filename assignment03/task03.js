// ------------------- Q1 -------------------
// output: 10

// ------------------- Q2 -------------------
// output: reference error: name is not defined

// ------------------- Q3 -------------------
// syntax error: intialize const

// ------------------- Q4 -------------------
// output:
// [1]
// [1, 2]
// [1, 2, 3]
// [1, 2, 3, 4]
// [1, 2, 3, 4, 5]

// ------------------- Q5 -------------------
// output: 
// 1
// 2
// 3, 4, 5

// ------------------- Q6 -------------------
function addValues(...values){
  return values.reduce( (accumulator, currentValue) => accumulator + currentValue )
}
console.log(addValues(1, 2, 3, 4)); //output: 10





