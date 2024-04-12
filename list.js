const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");
const clearButton = document.getElementById("clear-button");

function addtask() {
    if (inputBox.value === '') {
        alert("You must type something!!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        updateClearButtonVisibility();
    }
    inputBox.value = "";
    saveData();
}

listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        updateClearButtonVisibility();
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        updateClearButtonVisibility();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data");
    updateClearButtonVisibility();
}

function updateClearButtonVisibility() {
    const allTasks = listcontainer.querySelectorAll("li");
    if (allTasks.length === 0) {
        clearButton.style.display = "none";
    } else {
        clearButton.style.display = "block";
    }
}
function clearTasks(){
    listcontainer.innerHTML="";
    updateClearButtonVisibility();
    saveData();
}

showTask();
