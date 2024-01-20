// Addition
function addition_Function() {
    var addition = 2 + 2;
    document.getElementById("Math+").innerHTML = "2 + 2 = " + addition;
}

// Subtraction
function subtraction_Function() {
    var Subtraction = 5-2;
    document.getElementById("Math-").innerHTML = "5 - 2 = " + Subtraction;
}

// Multiplication
function multiplication_Function() {
    var Multiply = 6 * 8;
    document.getElementById("Math*").innerHTML = "6 * 8 = " + Multiply;
}

// Division
function division_Function() {
    var divide = 48 / 6;
    document.getElementById("Math/").innerHTML = "48 / 6 = " + divide;
}

// Multiple Math Functions
function more_Math() {
    var simple_math = (1 + 2) * 10 / 2 - 5;
    document.getElementById("MathMultiple").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_math;
}

// Modulus operator (remainder after division)
function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("ModulusOperator").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

// Negation - Turn a positive into a negative
function negation_Operator() {
    var x = 10;
    document.getElementById("NegationOperator").innerHTML = -x;
}

// increment function
var X = 5;
X++;
document.write(X);

// decrement function
var Y = 5.25;
Y--;
document.write(Y);

// Randon number popup window 1 - 100
window.alert(Math.random() * 100);
