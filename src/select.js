function getCheckedBoxes(checkboxName) {
    var checkboxes = document.getElementsByClassName(checkboxName);
    var servicesChecked = [];

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            servicesChecked.push(checkboxes[i].getAttribute('name'));
        }
    }

    return servicesChecked.length > 0 ? servicesChecked : null;
}

function setLocalStorage() {
    var services = getCheckedBoxes('service-checkbox');
    localStorage.setItem('services', JSON.stringify(services));
    console.log(services);
    console.log(localStorage.getItem('services'));
}
