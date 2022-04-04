function Food_Function(){
    var Food_Output;
    var Foods = document.getElementById("Food_Input") .value;
    var Food_String = " is a delicious choice!";
    var Food_Boring = " is a boring choice... ";
    switch (Foods) {
        case "Pizza":
            Food_Output = "Pizza" + Food_String;
    break;
    case "Burgers":
        Food_Output = "Burgers" + Food_String;
    break;
    case "Pasta":
        Food_Output = "Pasta" + Food_String;
    break;
    case "Chicken":
        Food_Output = "Chicken" + Food_String;
    break;
    case "Donairs":
        Food_Output = "Donairs" + Food_String;
    break;
    case "Salad":
        Food_Output = "Salad" + Food_Boring;
    break;
    default:
        Food_Output = "Please enter a food exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Food_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!"
}

var b = document.getElementById("ID_Name");
var btx = b.getContext("2d");
var grd = btx.createLinearGradient (0, 0, 480, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
btx.fillStyle = grd;
btx.fillRect(10, 10, 480, 230);
var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");
ctx.font = "50px Arial";
ctx.fillText("Hello World" ,125,125);
