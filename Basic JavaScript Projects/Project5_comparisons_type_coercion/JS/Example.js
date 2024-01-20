// NaN (Not a Number)
function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
    document.getElementById("Test1").innerHTML = isNaN('this is a string');
    document.getElementById("Test2").innerHTML = isNaN('007');
}

