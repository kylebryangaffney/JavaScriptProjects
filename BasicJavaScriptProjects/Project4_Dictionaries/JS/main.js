// a function to create a specefic dictionary instance and then get a value from the newly created dictionary to write out in the document
function myDictionary(){
    var Animal = {
        Species: "dog",
        Color: "white-ish",
        Breed: "mutt",
        Age: 14,
        Sound: "Woof"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Breed;
}

// a function to create a specefic dictionary instance, delete one of the values, and then attempt to get the newly deleted value from the dictionary 
function deleteDictionaryValue(){
    var Animal = {
        Species: "dog",
        Color: "white-ish",
        Breed: "mutt",
        Age: 14,
        Sound: "Woof"
    };
    delete Animal.Species
    document.getElementById("deleteValue").innerHTML = Animal.Species;
}
