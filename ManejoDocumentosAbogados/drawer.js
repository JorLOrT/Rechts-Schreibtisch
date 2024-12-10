document.addEventListener("DOMContentLoaded", function() {
    fetch("drawer.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
        });
});