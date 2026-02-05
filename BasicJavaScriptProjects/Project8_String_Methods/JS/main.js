function fullSentence() {
    var part1 = "I have ";
    var part2 = "made this ";
    var part3 = "into a ";
    var part4 = "complete sentence ";
    var completeSentence = part1.concat(part2, part3, part4);
    document.getElementById("concatenate").innerHTML = completeSentence;
}

// cutting out part of a string based on the index like pythons array[:] syntax
function sliceMethod() {
    var sentence = "All work and no play makes johnny a dull boy.";
    var section = sentence.slice(27, 33);
    document.getElementById("slice").innerHTML = section;

}

function upperMethod() {
    var lowerCase = "johnny";
    var upperCase = lowerCase.toUpperCase();
    document.getElementById("upper").innerHTML = upperCase;
}

// i know this is wildy over complicated
function searchMethod() {
    var sentence = "I think Ruth's dog is cuter than your dog!";
    var dogOwner = "Ruth";
    var result = sentence.search(dogOwner);
    document.getElementById("search").innerHTML = "Her name starts at index: " + result;
    document.getElementById("name").innerHTML = "Her name is: " + sentence.slice(result, result + dogOwner.length);

}

function stringMethod() {
    var x = 666;
    document.getElementById("numbersToString").innerHTML = x.toString();
}

function precisionMethod() {
    var x = Math.PI;
    document.getElementById("precision").innerHTML = x.toPrecision(11);

}

function toFixedMethod() {
    var x = Math.PI;
    document.getElementById("toFixed").innerHTML = x.toFixed(2);

}

// the documentation says that the valueOf method is for strings, but when I ran it without calling the tostring method on pi, it still worked. 
function valueOfMethod() {
    var x = Math.PI.toString(); // == Math.PI.valueOf
    document.getElementById("valueOf").innerHTML = x.valueOf();
}