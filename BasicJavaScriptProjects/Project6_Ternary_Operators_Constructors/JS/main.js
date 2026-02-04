// ternary operator to set the string variable canRide depending on a boolean result
// Checks the user's height and writes whether they can ride 
function rideFunction() {
    var height, canRide;
    height = document.getElementById("height").value;
    canRide = (height < 52) ? "You are not tall enough " : "You are tall enough ";
    document.getElementById("ride").innerHTML = canRide + "to ride";
}

// Checks the user's age and writes whether they can vote
function voteFunction() {
    var age, canVote;
    age = document.getElementById("age").value;
    canVote = (age < 18) ? "You are not old enough " : "You are old enough ";
    document.getElementById("vote").innerHTML = canVote + "to vote";
}


// Function to start counting at 9 and reach 10 through nesting other functions.
function countFunction(){
    document.getElementById("nested_function").innerHTML = Count();
    // sets the starting value 
    function Count(){
        var startingPoint = 9;
        // counts from the starting value up 1
        function plusOne(){
            startingPoint += 1;
        }
        plusOne();
        return startingPoint;
    }
}

// Constructor function for creating Vehicle objects (Make/Model/Year/Color)
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

// Create specific Vehicle objects using the Vehicle constructor
var jackCar = new Vehicle("Dodge", "Viper", 2020, "Red");
var janeCar = new Vehicle("Jeep", "Trail Hawk", 2021, "Blue");
var emilyCar = new Vehicle("Toyota", "Rav4", 2022, "Green");
var janetCar = new Vehicle("Ford", "Pinto", 2023, "Yellow");

// Writes a sentence about Jack's car
function makeVehicles() {
    document.getElementById("keywords_and_constructors").innerHTML =
        "Jack drives a " + jackCar.Vehicle_Color + " colored " + jackCar.Vehicle_Model + " made in " + jackCar.Vehicle_Year;
}


// Writes a sentence about Jane's car into the HTML file
function makeNewVehicle() {
    document.getElementById("new_and_this").innerHTML =
        "Jane drives a " + janeCar.Vehicle_Color + " colored " + janeCar.Vehicle_Model + " made in " + janeCar.Vehicle_Year;
}


// Constructor function for creating Dog objects (Name/Breed/Age/Color)
function Dog(Name, Breed, Age, Color) {
    this.Dog_Name = Name;
    this.Dog_Breed = Breed;
    this.Dog_Age = Age;
    this.Dog_Color = Color;
}

// Create specific Dog objects using the Dog constructor
var redDog = new Dog("Alice", "Red Heeler", 4, "Red");
var whiteDog = new Dog("Dexter", "Mutt", 14, "White");

// Function to write a sentence about the whiteDog into the index.html file 
function makeNewDog() {
    document.getElementById("dog").innerHTML =
        whiteDog.Dog_Name + " is a " + whiteDog.Dog_Color + " " + whiteDog.Dog_Breed + " and is " + whiteDog.Dog_Age + " years old";
}

