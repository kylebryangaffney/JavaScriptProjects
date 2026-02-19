function getMsg() {
    let ajaxRequest = new XMLHttpRequest();

    // get input name to display users name
    let inputVal = document.getElementById("fullName").value;

    // function to display user input after request is made
    ajaxRequest.onload = function() {
        document.getElementById("tkuMsg").innerHTML = "Thank you " + inputVal + " for signing up";
    }

    // prepare type of request from the server
    ajaxRequest.open("GET", "response.html", true);

    // defines the ajax response callback method to establish if the response was successful and determines where the data needs to display
    ajaxRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("content").innerHTML = ajaxRequest.responseText;
        }
    }

    // send request
    ajaxRequest.send();
}
