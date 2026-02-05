// local and global variables
var x = 10;
var num = 60;

function addNumber10() {
    document.writeln(10 + num + "<br>");
}

function addNumberx() {
    var y = 60;
    document.writeln(y + x + "<br>");
}

addNumber10();
addNumberx();


function addNumber12() {
    console.log(12 + num);
}
// error function because y does not exist outside of addNumberX()
function addNumber60() {
    console.log(y + x);
}

// if statement manipulation
if (x < num) {
    document.writeln("X is greater than num because: " + x + " > " + num);
}
else {
    document.writeln("X is less than num because: " + x + " < " + num);
}

// I know this could be written more concisely, but I was trying to manipulate the conditionals
function getDate() {
    var curHour = new Date().getHours();
    if (curHour > 6 && curHour < 11) {
        document.getElementById("Greeting").innerHTML = "How are you this morning?"
    }
    else if (curHour >= 11 && curHour < 17) {
        document.getElementById("Greeting").innerHTML = "How are you this afternoon?"
    }
    else if (curHour >= 17 && curHour < 22) {
        document.getElementById("Greeting").innerHTML = "How are you this evening?"
    }
    else {
        document.getElementById("Greeting").innerHTML = "How are you today?"
    }
}

function ageFunction(){
    var age = document.getElementById("Age").value;
    var vote; // initially i had it set to "", but because JS is not typed, 
    // I left it just as the declaration, Is this considered best practice? 
    // is there any benefit to declaring and initializing the value to a 
    // string to show that the variable is intended to be a string as opposed to some other data type?
    if (age >= 18){
        vote = "You are old enough to vote"; 
    }
    else{
        vote = "You are not old enough to vote";
    }
    document.getElementById("howOldAreYou").innerHTML = vote;
}

function timeFunction(){
    var time = new Date().getHours();
    var reply;
// is it common to use the "==" comparison in this type of statement? it seems like it is accomplishing the same thing as &&. Or am I misunderstanding?
    if (time < 12 == time > 0){
        reply = "It is the morning";
    }
    else if (time >= 12 == time < 18){
        reply = "It is the afternoon";
    }
    else{
        reply = "It is the evening";
    }
    document.getElementById("timeOfDay").innerHTML = reply;
}