document.addEventListener('DOMContentLoaded', function () {
    var navbarContainer = document.getElementById('navbar-container');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            navbarContainer.innerHTML = this.responseText;
        }
    };
    xhttp.open('GET', 'navbar.html', true);
    xhttp.send();
});