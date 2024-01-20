document.write("10" + 5);

// Infinity and - Infinity

function my_Function1() {
    document.getElementById("Test3").innerHTML = ( 1.7976931348623157E3081);
    document.getElementById("Test4").innerHTML = ( -1.7976931348623157E3081);
}
// true or false using > or < sign
document.write (10 > 2);
document.write (10 < 2);

// creating a console log entry
console.log(2 + 2);
console.log(10 < 2);

// true or false by comparison
document.write(10 == 10);
document.write(3 == 11);

// true or false using date type comparison.
function comparison_Function() {
    x = 10;
    y = 5;
    z = 10;
    a = "Ten";
    b = "Five";
    c = "Ten";
    document.getElementById("Test5").innerHTML = (x === z);
    document.getElementById("Test6").innerHTML = (x === y);
    document.getElementById("Test7").innerHTML = (x === a);
    document.getElementById("Test8").innerHTML = (a === c);
    document.getElementById("Test9").innerHTML = (a === b);

// And Or operator
    document.getElementById("Test10").innerHTML = (5 > 2 && 10 > 4);
    document.getElementById("Test11").innerHTML = (5 > 10 && 10 > 4);
    document.getElementById("Test12").innerHTML = (5 > 10 || 10 > 4);
    document.getElementById("Test13").innerHTML = (5 > 10 || 10 > 20);

}
// Not Operator
function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
    document.getElementById("Not1").innerHTML = !(5 > 10);
}