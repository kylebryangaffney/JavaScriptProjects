// Adds 4 and 61, then displays the sum in the element with id="addddition"
function addddition_Funtion() {
    var sum = 4 + 61;
    document.getElementById("addddition").textContent =
        "4 + 61 = " + sum;
}

// Resets the addition paragraph back to its original text using data-original
function Clear_Addition() {
    var paragraph = document.getElementById("addddition");
    paragraph.textContent = paragraph.dataset.original; // set the text data back to the original text
}

// Subtracts 2 from 5, then writes the result into the element with id="subtraction"
function subtraction_function() {
    var difference = 5 - 2;
    document.getElementById("subtraction").innerHTML = "5 - 2 = " + difference;
}


// Multiplies 5 by 2, then writes the product into the element with id="multiplication"
function multiply_function() {
    var product = 5 * 2;
    document.getElementById("multiplication").innerHTML = "5 * 2 = " + product;
}


// Divides 5 by 2, then writes the quotient into the element with id="division"
function division_function() {
    var quotient = 5 / 2;
    document.getElementById("division").innerHTML = "5 / 2 = " + quotient;
}

// Evaluates am expression, then displays a word-problem and answer
function longer_function() {
    var result = (1 + 2) * 10 / 2 - 5;
    document.getElementById("word_problem").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals: " + result;

}


// Uses the modulus operator to find the remainder of 25 divided by 6
function modulus_Operator() {
    var result = 25 % 6;
    document.getElementById("modulus").innerHTML = "The remainder of 25 / 6 = " + result;

}


// Applies the unary minus operator to make 6 negative
function unary_Operator() {
    var result = 6;
    document.getElementById("unary").innerHTML = -result;

}


// Increments a number by 1 using ++
function add_1() {
    var result = 5;
    result++;
    document.getElementById("add_1").innerHTML = result;

}


// Decrements a number by 1 using --
function sub_1() {
    var result = 5;
    result--;
    document.getElementById("sub_1").innerHTML = result;

}


// Pops up an alert showing a random number between 0 and 1
function Random_PopUp_Window() {
    var Alert_Message = "A random number between 0 and 1 is: " + Math.random();
    window.alert(Alert_Message);
}

// Pops up an alert showing the value of pi from the Math object
function Math_Object_Window() {
    var pi = Math.PI;
    window.alert(pi);

}
