// Takes user input and compares it to a group of specific color cases to return a response

function colorFunction() {
    // big variable to add the parts of the message to
    let colorOutput = "";
    
    // getting the value entered from the user in the HTML input field
    let colorInput = document.getElementById("colorInput").value;
    let colorString = " is a fantastic color";

    // compares 'colorInput' to each case.
    switch (colorInput) {
        case "red":
            colorOutput = "red" + colorString;
            break; // breaks out once a match is found
            
        case "yellow":
            colorOutput = "yellow" + colorString;
            break;
            
        case "green":
            colorOutput = "green" + colorString;
            break;
            
        case "blue":
            colorOutput = "blue" + colorString;
            break;
            
        case "pink":
            colorOutput = "pink" + colorString;
            break;
            
        case "purple":
            colorOutput = "purple" + colorString;
            break;
            
        case "brown":
            colorOutput = "brown" + colorString;
            break;
            
        case "orange":
            colorOutput = "orange" + colorString;
            break;

       // default block runs if the user input doesn't match any from the group of color names
        default:
            colorOutput = "Please enter the color exactly as it appears on the list";
    }

    // set the output 
    document.getElementById("output").innerHTML = colorOutput;
}