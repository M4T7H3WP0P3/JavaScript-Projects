function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate") .innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice") .innerHTML = Section;
}

function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string") .innerHTML = X.toString();
}

function precision_Method() {
    var X = 325453.243256223252252;
    document.getElementById("Precision") .innerHTML = X.toPrecision(12);
}

//toFixed() is a Number method that is used to convert a number to fixed-point notation (rounding the result where necessary) and return its value as a string. 
function fixed_Method() {
    let num = 5.56789;
    let n = num.toFixed();
    document.getElementById("Fixed").innerHTML = n;
}

//the valueOf() method is used to return the primitive value of a number. 
function value_Method() {
    let num = 12;
    let n = num.valueOf();
    document.getElementById("Value").innerHTML = n;
}