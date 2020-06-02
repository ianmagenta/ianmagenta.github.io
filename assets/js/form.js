window.addEventListener("DOMContentLoaded", e => {

    const form = document.getElementById("form");
    form.addEventListener("submit", async e => {
        e.preventDefault();
        const formData = new FormData(form);
        var xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                window.location.hash = "#confirmation"
            } else {
                console.log("Oh no!")
            }
        };
        xhr.send(formData);
    });
});
