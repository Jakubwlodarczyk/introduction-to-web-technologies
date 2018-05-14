function addName() {
    var firstName = prompt("Please type your first name");
    var data = document.getElementById("data");
    var dataDiv = document.createElement("div");
    dataDiv.innerHTML = "<div>" + firstName + "</div>";

    data.appendChild(dataDiv);
}