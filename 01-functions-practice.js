//STEP 1
function halfNumber(number) {
    var half = number / 2;
    console.log("Half of " + number + " is " + half + ".");
    return half;
}
//STEP 2
function squareNumber(number) {
    var square = number * number;
    console.log("The result of squaring the number " + number + " is " + square + ".");
    return square;
}
//STEP 3
function percentOf(num1, num2) {
    var percent = (num1 / num2) * 100;
    console.log(num1 + " is " + percent + "% of " + num2 + ".");
    return percent;
}
//STEP 4
function findModulus(num1, num2) {
    var modulus = num2 % num1;
    console.log(modulus + " is the modulus of " + num1 + " and " + num2 + ".");
    return modulus;
}

function main(){
    "use strict";
    var userInput;
    var userInput2;

    userInput = window.prompt("Enter a number to be halfed:");
    window.alert("Half of " + userInput + " is " + halfNumber(userInput) + ".");

    userInput = window.prompt("Enter a number to be squared: ");
    window.alert("The result of squaring the number " + userInput + " is " + squareNumber(userInput) + ".");

    userInput = window.prompt("Enter the first number for the percentage: ");
    userInput2 = window.prompt("Enter the second number for the percentage: ");
    window.alert(userInput + " is " + percentOf(userInput, userInput2) + "% of " + userInput2 + ".");

    userInput = window.prompt("Enter the first number for the modulus: ");
    userInput2 = window.prompt("Enter the second number for the modulus: ");
    window.alert(findModulus(userInput, userInput2) + " is the modulus of " + userInput + " and " + userInput2 + ".");
}

main();