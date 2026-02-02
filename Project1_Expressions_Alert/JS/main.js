// setting our string variables for the pop up alert and the sentence concatination
var Sent1 = "This is the beginning of the string",
    Sent2 = " and this is the end of the string",
    Sent3 = Sent1 + Sent2,
    alertMessage = "Alert Pop Up";
    

// setting our int variables for the math writeln
var num1 = 66;
var num2 = 10;

window.alert(alertMessage);

document.writeln(num1 + num2);
document.writeln(Sent3);

// defining a function
function My_First_Function() {
    var str = "This is the button text"; // declaring and setting a string variable
    document.getElementById("Button_Text").innerHTML = str; // getting an element in the html ddocument, then assigning the newly declaredd strring variable as the new text in the element we got by its id
}
