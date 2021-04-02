function getCheckedBoxes(checkboxName) {
    var checkboxes = document.getElementsByClassName(checkboxName);
    var checkboxesChecked = [];

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkboxesChecked.push(checkboxes[i].getAttribute('name'));
        }
    }

    return checkboxesChecked.length > 0 ? checkboxesChecked : null;
}

function setLocalStorage() {
    var checkedBoxes = getCheckedBoxes('service-checkbox');
    localStorage.setItem('services', JSON.stringify(checkedBoxes));
    console.log(checkedBoxes);
    console.log(localStorage.getItem('services'));
}
