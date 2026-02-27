// function to build an array, retrieve variables stored in local storage, check those locally stored variables validity, then parse the variables and store them into the array we built
function getTodos() {
    let todoList = new Array();
    let todoStr = localStorage.getItem("todo");

    // I know the reference code has if (todoStr !== null), but I am making a stylistic choice to check against undefined, and false and empty variables
    if (todoStr) {
        todoList = JSON.parse(todoStr);
    }
    return todoList;

}

// function to get the new task the user inputs, then push it onto a copy of the todolist, then replace the old todo list with the copy
function add() {
    let task = document.getElementById("task").value;

    let todoList = getTodos();

    todoList.push(task);

    localStorage.setItem("todo", JSON.stringify(todoList));
    document.getElementById("task").value = "";

    show();

}

// function to parse through the list and build a displayable version that is user readable.
function show(){
    let todoList = getTodos();

    let html = "<ul>";
    for (let i = 0; i < todoList.length; i++) {
        html += "<li>" + todoList[i] + "<button class='remove' id='" + i + "'>x</button></li>";
    };

    html += "</ul>";
    document.getElementById("todos").innerHTML = html;

    // get all of the remove buttons, and add an event listener to each one
    let xButtons = document.getElementsByClassName('remove');
    for (let i = 0; i < xButtons.length; i++){
        xButtons[i].addEventListener("click", remove);
    }

}

// function to remove a specific element from the todolist array
function remove(){

    // get the current ID of the element the user clicked on
    let taskId = this.getAttribute("id");

    // get the current list of todos
    let todoList = getTodos();
    // go to the index of the button that was clicked, and remove one element
    todoList.splice(taskId, 1);

    // set the locally stored todo list to the updated version
    localStorage.setItem("todo", JSON.stringify(todoList))

    show();

}

document.getElementById("add").addEventListener("click", add);

show();

