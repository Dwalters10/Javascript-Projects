
// while loop to count to 10
function Call_Loop()    {
    var Digit = "";
    var X = 1;
    while (X < 11)    {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
// for loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop()     {
    for (Y = 0; Y < Instruments.length; Y++)    {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instuments").innerHTML = Content;
}

// Array
function array_Function() {
    var Mood = [];
    Mood[0] = "happy"
    Mood[1] = "sad"
    Mood[2] = "angry"
    Mood[3] = "hungry"
    document.getElementById("Array").innerHTML = "I am feeling " + Mood[0] + ".";
}

// Constant

function contant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.color + " " + Musical_Instrument.type + " is " + Musical_Instrument.price;
}

// using let
var x = 20
document.write(x);
{
    let x = 40;
    document.write("<br>" + x)
}
document.write("<br>" + x)

// objects and return
function objects_function() {
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();
}