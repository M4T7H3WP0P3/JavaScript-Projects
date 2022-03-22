function addition_Function() { // names function
    var addition = 11 + 6; // declares variable
    document.getElementById("MathAdd").innerHTML = "11 + 6 = " + addition; //returns an element object representing the element whose id property matches the specified string
}

function subtraction_Function() { // names function
    var subtraction = 29 - 11; // declares variable
    document.getElementById("MathSub").innerHTML = "29 - 11 = " + subtraction;  //returns an element object representing the element whose id property matches the specified string
}

function multiplication() { // names function
    var multiply = 5 * 9; // declares variable
    document.getElementById("MathMultiply").innerHTML = "5 x 9 = " + multiply;  //returns an element object representing the element whose id property matches the specified string
}

function division() { // names function 
    var divide = 100 / 2; // declares variable
    document.getElementById("MathDivide").innerHTML = "100 / 2 = " + divide;  //returns an element object representing the element whose id property matches the specified string
}

function modulus_Operator () { // names function
    var simple_Math = 33 % 5; // declares variable
    document.getElementById("MathRemain").innerHTML = "When you divide 33 by 5 you have a remainder of:" + simple_Math;  //returns an element object representing the element whose id property matches the specified string
}

function increment_Operator () { // names function
    var x = 29; // declares variable
    x++;
    document.getElementById("increment").innerHTML = "incrementing 29 will give you " + x;  //returns an element object representing the element whose id property matches the specified string
}

function decrement_Operator () { // names function
    var y = 24 // declares variable
    y--;
    document.getElementById("decrement").innerHTML = "decrementing 24 will give you " + y;  //returns an element object representing the element whose id property matches the specified string
}

function getRndInteger(min, max) { // names function
    return Math.floor(Math.random() * (max - min)) + min; // returns a random integer from 1 to 9
}


