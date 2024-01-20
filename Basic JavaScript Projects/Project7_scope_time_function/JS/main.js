
// if Statements
function get_Date() {
    if (new Date() .getHours() <18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

// if else statements.
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Grats = "You are an adult!";
    }
    else {
        Grats = "You are not yet an adult.";
    }
    document.getElementById("your_age").innerHTML = Grats;
}

// Else If statements
function Time_Function() {
    var Time = new Date() .getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

// Global and local variable as well as console.log to help debug issue
var Y = 15
function Add_Numbers_1() {
    var X = 10
    document.write(20 + X + "<br>");

}
function Add_Numbers_2() {
    console.log(X + 10)
}

Add_Numbers_1()
Add_Numbers_2()