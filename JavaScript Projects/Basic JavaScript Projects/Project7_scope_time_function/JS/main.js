// Global variable
var X = 10; //declares X variable and assigns value
function Add_numbers_1() { //names function
    document.write(20 + X + "<br>"); //displays result in browser and <br> used for line break
}
function Add_numbers_2() { //names function
    document.write (X + 100 + "<br>"); //display result in browser and <br> used for line break
}
Add_numbers_1(); //calls function
Add_numbers_2(); //calls function

// Local variable
function Add_numbers_3(){ //names function
    var Y = 10; //declares Y variable and assigns value
    document.write(20 + Y + "<br>"); //display result in browser and <br> is used for line break
}
function Add_numbers_4(){ //names function
    document.write(Y + 100); //does not display in browser as Y variable is local to previous function
}
Add_numbers_3(); //calls function
Add_numbers_4(); //calls function

// Function that includes If Statement
function get_Date() { //names function
    if (new Date().getHours() < 18) { //defines condition of if statement
    document.getElementById("Greeting").innerHTML = "How are you today"; // displays results in browser if condition of if statement is met
    }
}

// Function that includes if and else statements
function Age_Function() { //names function
    Age = document.getElementById("Age") .value; //assigns value written by to user to variable age
    if (Age >= 18){ //states that if condition is true to execute the specified block of code
        Vote = "You are old enough to vote!"; //assigns value to variable Vote that will display if condition of "if" statement is true
    }
    else { //state that if condtion is false to execute the specified block of code
        Vote = "You are not old enought to vote!"; //assigns value to variable Vote that will display if conition of "if" statement is false
    }
    document.getElementById("How_old_are_you?") .innerHTML = Vote; // displays result of the specified block of code in relation to the answer of the specified condition
}

// Time_function 
function Time_function() { //names function
    var Time = new Date().getHours(); //declare variable Time and assigns vale
    var Reply; //declares variable Reply
    if (Time < 12 == Time > 0){ // states that if condition it true to execute the specified block of code
        Reply = "It is morning time!"; //assign value to variable Reply that will display if condition of if statement is true
    }
    else if (Time > 12 == Time < 18) { //specifies a new test if the first condition if false
        Reply = "It is the afternoon.";//assign value to variable Reply that will display if "else if" conditions is met
    }
    else { //states that if both "if" and "else if" conditions are false to execute the specified block of code
        Reply = "It is evening time."; //assign value to variable Reply that will display if both "if" and "else if" statements are false
    }
    document.getElementById("Time_of_day").innerHTML = Reply; // displays result of the specified values
}