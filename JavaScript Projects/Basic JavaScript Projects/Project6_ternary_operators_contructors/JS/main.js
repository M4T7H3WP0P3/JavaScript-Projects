function Ride_Function() { //names function
    var Height, Can_ride; //declares height and can_ride variables
    Height = document.getElementById("Height") .value; //assigns value to height by accessing HTML element value specified
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";//assigns value to variable Can_ride based on stated condition, uses ternary operator. 
    document.getElementById("Ride") .innerHTML = Can_ride + " to ride."; //accesses HTML element by specified id and display " to ride. "
}

// Constructor 
function Person(name, age, gender) { //object constructor function.
    this.Person_name = name; //property
    this.Person_age = age; //property
    this.Person_gender = gender; //property
}
var Jon = new Person('Jon Duckett', 44, 'Male'); //declares Jon variable and assigns properties to "new" object
var Peter = new Person('Peter Parker', 20, 'Male'); //declares Peter variable and assigns properties to "new" object
var Matthew = new Person('Matthew Pope', 32, 'Male'); // declares Mattew variable and assigns properties to "new" object
function myFunction() { //name function
    document.getElementById("New_and_This") .innerHTML =
    Peter.Person_name + " is a " + Peter.Person_age + " year old " + Peter.Person_gender;//returns an element object representing the element whose id properties match those specified
}

function count_Function() { 
    document.getElementById("Nested_Function").innerHTML = Count(); //accesses HTML element by specified id
    function Count() { //names function
        var Starting_point = 9; //declares variable and assigns a value
        function Plus_one(){Starting_point += 1;} //nested function
        Plus_one(); //calls function
        return Starting_point; //stops function and returns given value
    }
}
