document.write (typeof 5); // type of operator which displays "number" in browser

document.write ("55" + 33); // expression combining a string and number and displays in browser

document.write (30 == 53); // == shows comparsion should be made by determining if the data on the left is equal to data on the right and displays in browser

X= 45 // assigns value to variable X
Y= 45 // assigns value to variable Y
document.write (X === Y); // checks whether data on the left side of the symbol if equal to the data and the data on the right and that it is the same data type and displays in the browser

document.write (543 < 353); // Boolean logic that checks if 543 is less than 353 and displays in browser

document.write (55 > 22); // Boolean logic the check if 55 is greater than 22 and display in the browser

document.write (5 > 2 && 10 > 4); // AND operator that compares that two expression to determine if both are true and displays in browser

document.write (3 > 5 || 5 > 2); // OR operator that compares both expressions and return true is one expression is true and false if both are false. 

function not_Function () { // names function
    document.getElementById("Not") .innerHTML = ! (30 > 13); //returns an element object representing the element whose id property matches the specified string and uses the NOT operator to check whether or not something is true
}