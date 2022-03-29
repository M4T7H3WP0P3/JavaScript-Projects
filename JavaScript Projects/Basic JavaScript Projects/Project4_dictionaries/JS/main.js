function my_Dictionary() { //name function
    var Vehicle = { // declares variable
        Make: "Hyundai", // assigns key identifier and value that is identified by the key
        Model: "Sonata", // assigns key identifier and value that is identified by the key
        Color: "Red", // assigns key identifier and value that is identified by the key
        Year: "2021", // assigns key identifier and value that is identified by the key
        Engine: "V6", // assigns key identifier and value that is identified by the key
        Sound: "Beep!", // assigns key identifier and value that is identified by the key 
    };
    delete Vehicle.Make; //assigns key and value to be deleted by delete operator
    document.getElementById("Dictionary").innerHTML = Vehicle.Make; //returns an element object representing the element whose id property matches the specified string
}