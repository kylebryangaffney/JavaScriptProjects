// Entry point for the receipt math and print to log. It identifies the selected pizza size, sets base price, initializes the order text string, and then sends the running total and text into the getTopping function to add the toppins math

function getReceipt() {
    let text1 = "<h3>Your Order: </h3>";
    let runningTotal = 0;
    let sizeTotal = 0;
    let selectedSize = 0;
    let sizeArray = document.getElementsByClassName("size");

    for (let i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }

    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 12;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 14;
    }

    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");

    getTopping(runningTotal, text1);
}


//Here we process the meat additions to the pizza calculations. Adds all checked meat items to the order text string,then adds onto the running total price with one free topping then calls the getVegetables function with updated values to pass in
function getTopping(runningTotal, text1) {
    let toppingTotal = 0;
    let selectedToppings = [];
    let toppingArray = document.getElementsByClassName("toppings");

    for (let i = 0; i < toppingArray.length; i++) {
        if (toppingArray[i].checked) {
            selectedToppings.push(toppingArray[i].value);
            console.log("selected topping item: (" + toppingArray[i].value + ")");
            text1 = text1 + toppingArray[i].value + "<br>";
        }
    }

    let toppingCount = selectedToppings.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }

    runningTotal += toppingTotal;
    console.log("total selected topping items " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");

    // no need to print to the html here since we have not finished adding up all of the money and toppings and vegetables
    //document.getElementById("showText").innerHTML = text1;
    //document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
    getVegetables(runningTotal, text1);

}


// adds the vegetable selections to the running total with one free vegetable like the meats, and then sets the html string to the complete list of size and toppings 
function getVegetables(runningTotal, text1) {
    let vegetableTotal = 0;
    let selectedVegetables = [];
    let vegetablesArray = document.getElementsByClassName("vegetables");

    for (let i = 0; i < vegetablesArray.length; i++) {
        if (vegetablesArray[i].checked) {
            selectedVegetables.push(vegetablesArray[i].value);
            console.log("selected vegetable item: (" + vegetablesArray[i].value + ")");
            text1 = text1 + vegetablesArray[i].value + "<br>";
        }
    }

    let vegetableCount = selectedVegetables.length;
    if (vegetableCount > 1) {
        vegetableTotal = (vegetableCount - 1);
    } else {
        vegetableTotal = 0;
    }

    runningTotal += vegetableTotal;
    console.log("total selected topping items " + vegetableCount);
    console.log(vegetableCount + " vegetables - 1 free vegetable = " + "$" + vegetableTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");

    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>";
}
///////////////