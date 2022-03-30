function full_Sentence() { // names function
    var part_1 = "I have "; //declares part_1 variable and assigns string value
    var part_2 = "made this "; //declares part_2 variable and assigns string value
    var part_3 = "into a complete "; //declares part_3 variable and assigns string value
    var part_4 = "sentence."; //declares part_4 variable and assigns string value
    var whole_sentence = part_1.concat(part_2, part_3, part_4); //declares whole_sentence variable and assigns values by concat() method
    document.getElementById("Concatenate") .innerHTML = whole_sentence; // uses document.getelementbyid method to find element by element id and displays whole_sentence value
}

function slice_Method() { // names function
    var Sentence = "All work and no play makes Johnny a dull boy"; //declares Sentence variable and assigns string value
    var Section = Sentence.slice(27,33); //declares Section variable and uses slice() method to assign value
    document.getElementById("Slice") .innerHTML = Section; // uses document.getelementbyid method to find element by element id and display Section value specified by slice() method
}

function string_Method() { // names function
    var X =182; //declares X variable and assigns value
    document.getElementById("Numbers_to_string") .innerHTML = X.toString(); //use document.getelementbyid method to find element by element id and displays value given in string format
}

function precision_Method() { //names function
    var X = 325453.243256223252252; //declares X variable and assigns value
    document.getElementById("Precision") .innerHTML = X.toPrecision(12); //uses document.getelementbyid method to find element by element id and use toPrecision() to display length of X by specified length
}

//toFixed() is a Number method that is used to convert a number to fixed-point notation (rounding the result where necessary) and return its value as a string. 
function fixed_Method() { // names function
    let num = 5.56789; // declares num variable and assigns value
    let n = num.toFixed(); // declares n variable and assign value
    document.getElementById("Fixed").innerHTML = n; //uses document.getelelementbyid method to find element by element id and uses toFixed() to convert num value to a fixed-point notation.
}

//the valueOf() method is used to return the primitive value of a number. 
function value_Method() { //names function
    let num = 12; // declares num variable and assigns value
    let n = num.valueOf(); // declares n variable and assigns value
    document.getElementById("Value").innerHTML = n; // uses document.getelementbyid method to find element by element id and uses valueOf() to return the primitive value of the variable num's value. 
}