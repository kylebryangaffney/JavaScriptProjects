// I would not usually write a function in such a verbose fashion, but I am assigning two variables in the first function in order to satisfy the assignment requirements

function Get_Date() {
    var Cur_Date = Date(); // get todays date
    var Sentence_Content = "Today's Date is "; // create the string we will addd to for the paragraph element 
    document.getElementById("Date_Paragraph").textContent =
        Sentence_Content + Cur_Date; // set the data in the paragraph element 
}

function Clear_Date() {
    var paragraph = document.getElementById("Date_Paragraph"); // identify the element we want to mainipulate
    paragraph.textContent = paragraph.dataset.original; // set the text data back to the original text
}

function PopUp_Window() {
    var Alert_Message = "Thank you for clicking "; // set the string value in the popup
    Alert_Message += "the button"; // add to the string to complete the message
    window.alert(Alert_Message);
}



function myDictionary(){
    var Animal = {
        Species: "dog",
        Color: "black",
        Breed: "labrador",
        Age: 5,
        Sound: "Bark"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}


function countToTen(){
    let digit = "";
    let num = 1;
    while ( x < 11){
        digit += "<br>" + num;
        num++;
    }

    document.getElementById("countToTen").innerHTML = digit;
}