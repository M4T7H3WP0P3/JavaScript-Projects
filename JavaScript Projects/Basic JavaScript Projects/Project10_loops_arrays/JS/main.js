function Call_Loop(){ //declares function
    let Digit = ""; //declares variable
    let X = 1;//declares variable and assigns value
    while (X < 11){  //marks statement to be executed while condition is true
        Digit += "<br>" + X; //statement
        X++; //increments value of X
    }
    document.getElementById("Loop").innerHTML = Digit; //returns the element that has the ID attribute with the specified value
}

let Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //declares variable and assigns values
let Content = "";//declares variable and assigns value
let Y;//declares variable
function for_Loop() { //declares function 
    for (Y = 0; Y < Instruments.length; Y++) { //defines code block that is executed as long as condition is true
        Content += Instruments[Y] + "<br>"; //adds the value of the right variable to the Content variable
    }
    document.getElementById("List_of_Instruments").innerHTML = Content; //returns the element that has the ID attribute with the specified value
}

function cat_pics() { //declares function
    let Cat_Picture = []; //assigns variable and create empty array
    Cat_Picture[0] = "sleeping"; // assign index element to variable and gives value
    Cat_Picture[1] = "playing"; // assign index element to variable and gives value
    Cat_Picture[2] = "eating"; // assign index element to variable and gives value
    Cat_Picture[3] = "purring"; // assign index element to variable and gives value
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[3] + "."; //returns the element that has the ID attribute with the specified value and concatenates array elements
}

function constant_function(){ // declares function
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"}; //declare a block constant and assigns properties and values
    Musical_Instrument.color = "blue"; //changes value of property "color"
    Musical_Instrument.price = "$900"; //create identifier and assigns property and value
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price; //returns the element that has the ID attribute with the specified value
}

let car = { //delcares variable
    make: "Nissan ", // assigns property and give property
    model: "Skyline ", // assigns property and give property
    year: "2002 ", // assigns property and give property
    color: "red ", // assigns property and give property
    description: function (){ //method
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description(); //returns the element that has the ID attribute with the specified value

let text = ""; //declares value
let i = 0; //declares value
while (i < 5) { 
    text += i + "<br>";
    i++;
    if (i === 3) break
}
document.getElementById("break").innerHTML = text;

let word = "";
let o = 0;
while (o < 5) {
    o++;
    if (o === 3) continue;
    word += o + "<br>";
}
document.getElementById("continue").innerHTML = word;