function reverseString(string) {
    const splitString = string.split("");
    const reverseArray = [];
    for (letter of splitString) {
        reverseArray.unshift(letter)
    }
    return reverseArray.join("");
}

console.log(reverseString("welcome")) //emocleW
