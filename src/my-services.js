window.onload = populateTemplate();

function populateTemplate() {
    var array = JSON.parse(localStorage.getItem("services"));

    for (i = 0; i < array.length; i++) {
        document.getElementById(array[i].toLowerCase()).style.display = "block";
    }

}
