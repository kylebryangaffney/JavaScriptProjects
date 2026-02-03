

function listenerFunction() {
    const text = document.getElementById("textInput").value;
    document.getElementById("output").textContent = "You entered: " + text;
}

document.getElementById("showBtn").addEventListener("click", listenerFunction);

var stringValue = "10";

var intValue = 66;
var floatValue = 6.666;


//document.writeln(typeof stringValue);
//document.writeln(typeof intValue);
//document.writeln(typeof floatValue);
document.writeln(floatValue + intValue);
document.writeln(floatValue + Number(stringValue));
document.writeln(typeof floatValue + intValue);
document.writeln(typeof floatValue + stringValue);
document.writeln(2E310);
document.writeln(-2E310);
document.writeln(10 < 5);
document.writeln(10 > 5);


function NaNFunction() {
    document.getElementById("infinity").innerHTML = 0 / 0;
}

function NaNBoolString() {
    document.getElementById("NaNBoolString").innerHTML = isNaN(stringValue);
}

function NaNBoolInt() {
    document.getElementById("NaNBoolInt").innerHTML = isNaN(intValue);
}

console.log(2 - 66);
console.log("2 > 66: ", 2 > 66);
console.log("2 == 66: ", 2 == 66);
console.log("2 == 2: ", 2 == 2);

console.log("2 === 66: ", 2 === 66);
console.log("2 === '2': ", 2 === "2");
console.log("2 === 2: ", 2 === 2);

console.log("5 > 2 && 10 > 4: ", 5 > 2 && 10 > 4);
console.log("5 > 2 || 10 < 4: ", 5 > 2 || 10 < 4);
console.log("5 != 2 && 10 > 4: ", 5 != 2 && 10 > 4);

function notFunction() {
    document.getElementById("not").innerHTML = !(20 == 10);
}