// Switch statement
function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors)  {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default:
            Color_Output = "Please enter a color exactly as written on the list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

// getElementsByClassName() method
function Hello_World_Function()     {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

// Draw in <canvas> element
const ID_Name = document.getElementById("ID_Name");
const ctx = ID_Name.getContext("2d");

ctx.fillStyle = "red";
ctx.fillRect(20, 20, 150, 100);

// Draw in <canvas> element with gradient
const ID_Name1 = document.getElementById("ID_Name1");
const ctx1 = ID_Name1.getContext("2d");

// Gradient definition
const grd = ctx1.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx1.fillStyle = grd;
ctx1.fillRect(20, 20, 150, 100);