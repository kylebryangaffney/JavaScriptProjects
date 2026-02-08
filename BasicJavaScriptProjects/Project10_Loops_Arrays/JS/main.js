//Generates a list of numbers from 1 to 10 with a while loop
function callLoop() {
    let digit = "";
    let num = 1;
    while (num < 11) {
        digit += "<br>" + num;
        num++;
    }
    document.getElementById("loop").innerHTML = digit;
}


// uses while loop to progressively shorte a string by removing the last character in each iteration until the string is empty.

function lengthLoop() {
    let word = "a string";
    let output = "";
    while (word.length > 0) {
        output += word + "<br>";
        word = word.slice(0, -1);
    }
    document.getElementById("length").innerHTML = output;
}


let instruments = ["guitar", "drums", "keys", "bass", "trumpet", "trombone", "saxophone"];
let content = "";
let i = 0;


// Uses a for loop to iterate iterates through the global 'instruments' array and prints each element.
function forLoop() {
    for (i = 0; i < instruments.length; i++) {
        content += instruments[i] + "<br>";
    }
    document.getElementById("instruments").innerHTML = content;
}

// uses a for loop to iterate through an array after filling the array manually, then loops through to create descriptions.

function catFunction() {
    let catPicArray = []; // Initializing array
    catPicArray[0] = "sleeps";
    catPicArray[1] = "plays";
    catPicArray[2] = "eats";
    catPicArray[3] = "purrs";
    catPicArray[4] = "attacks";

    let i = 0;
    let content = "";

    for (i = 0; i < catPicArray.length; i++) {
        content += "In this picture, the cat " + catPicArray[i] + "<br>";
    }
    document.getElementById("catPicture").innerHTML = content;
}


// I had to flip flop a lot on this function to get it to work, but I have a better understanding of DOM and how synchronous vs asynchronous works now
function constFunction() {

    let sentence = "";

    const instrumentOfMusic = { type: "guitar", brand: "fender", color: "black" };
    instrumentOfMusic.color = "blue";
    instrumentOfMusic.price = "9 bands";
    sentence = "The cost of the " + instrumentOfMusic.type + " is " + instrumentOfMusic.price + "<br>";

    instrumentOfMusic.type = "piano";
    instrumentOfMusic.price = "Free 99 baby";
    sentence += "The cost of the " + instrumentOfMusic.type + " is " + instrumentOfMusic.price + "<br>";


    //instrumentOfMusic = "does not work because instrumentOfMusic is const";

    document.getElementById("constant").innerHTML = sentence;

}

//Helper function that calculates area based on two parameters.
function getRectArea(width, height) {
    if (width > 0 && height > 0) {
        return width * height;
    }
    return 0;
}


//iterates through an array with a for loop, and uses an array of integers as dimensions, calculating the area between pairs of adjacent numbers in the array

function printAreaRect() {
    let intArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let sentence = "";

    // Loops until length - 1 to avoid "undefined" on the final pair
    for (let i = 0; i < intArray.length - 1; i++) {
        sentence += getRectArea(intArray[i], intArray[i + 1]) + "<br>";
    }
    document.getElementById("rectangle").innerHTML = sentence;
}


//An object containing properties and a method and using 'this'
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function () {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("carObject").innerHTML = car.description();


// Exits a for loop prematurely when a condition is met

   function breakFunction() {
    let text = "";
    let i = 0;
    for (i = 0; i < 10; i++) {
        if (i === 8) {
            text += "The loop stopped because we got to " + i + "<br>";
            break; // terminates the loop
        }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("break").innerHTML = text;
}


//Skips a specific iteration of a for loop while allowing the rest of the loop to finish normally

function continueFunction() {
    let text = "";
    for (let i = 0; i < 10; i++) {
        if (i === 3) {
            text += "we got to three <br>";
            continue; // skip the rest of this iteration and goes back to the initial for loop condition
        }
        text += i + "<br>";
    }
    document.getElementById("continue").innerHTML = text;
}
