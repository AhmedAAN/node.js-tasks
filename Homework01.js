
//-------------- Question 2 --------------
async function first(){
  setTimeout(function() {console.log("first")}, 2000);
}
async function second(){
  setTimeout(function() {console.log("second")}, 1000);
}
async function third(){
  console.log("third")
}

first();
second();
third();
//-------------- Question 3 --------------
function maxNumInArray(array){
  let maxValue;
  let maxIndex= 0;
  for(let i = 0; i < array.length; i++){
    if(array[i] > array[maxIndex]){
      maxValue = array[i];
      maxIndex = i;
    }
  }  
  console.log("Max value is", maxValue);
  console.log("Max value index is", maxIndex);
}
//-------------- Question 4 --------------
function diffDays(date1, date2){
  let firstDay = new Date(date1);
  let secondDay = new Date(date2);
  let diffrenceInDays = Math.abs((secondDay - firstDay) / (1000 * 60 * 60 * 24));
  return(diffrenceInDays);
}
//-------------- Question 6 --------------
function multiReturn(){
    let firstName = "Ahmed";
    let lastName = "Nagy";
    
    return([firstName, lastName]);
}

const [fName, lName] = multiReturn();

console.log("My first name is", fName);
console.log("My last name is", lName);
//-------------- Question 7 --------------
function reverse(arr){
  const array = [];
  let n = arr.length - 1;
  for(i = 0; i < n, n >= 0; i++, n--){
    array[i] = arr[n];
  }
  return(array)
}
//-------------- Question 8 --------------
function convObjToArr(obj){
  const array = [];
  i = 0;
  for (const [key, value] of Object.entries(object1)) {
    array[i] = [key, value];
    i++;
  }
  return(array);
}
//-------------- Bonus 1 -----------------
function convertTime(time12){
  let [time, am_pm] = time12.split(' ');
  let [hours, minutes] = time.split(':');
  
  if (hours === "12") {
    hours = "00";
  }

  if (am_pm === "PM") {
    hours = parseInt(hours, 10) + 12;
  }

  return(hours+":"+minutes);
}
//-------------- Bonus 2 -----------------
function add(x) {
  return function(y) {
    return x + y;
  };
}
//-------------- Bonus 3 -----------------
function searchJohn(array){
  for(let object of array){
    if(object.name == "john"){
      return(true);
    }
  }
  return(false);
}
//----------------------------------------
