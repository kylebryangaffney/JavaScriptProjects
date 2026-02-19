function loadDoc() {
    // make a new xmlhttprequest object
    let xhttp = new XMLHttpRequest();
    // Defines a callback function to run when the request state changes after the data arrives
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("textChange").innerHTML = this.responseText;
        }
    };

    // sets request method to get and the text information from the text file
    xhttp.open("GET", "content.html", true);
    // actually sends the request
    xhttp.send();
}