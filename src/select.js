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

function setLocalStorageAndRedirect() {
    var services = getCheckedBoxes('service-checkbox');
    localStorage.setItem('services', JSON.stringify(services));

    location.href = '/my';
}
