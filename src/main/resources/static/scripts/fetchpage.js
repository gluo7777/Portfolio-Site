// Implement in pure JS
// fetch API + promises to asynchronously load html contents

// document.addEventListener('DOMContentLoaded', function (event) {
//     replaceWithHtml("placeholder", "template.html");
// });

var staticErrorPage = document.createElement("div");
var title = document.createElement("h1");
title.appendChild(document.createTextNode("Error displaying contents."));
staticErrorPage.appendChild(title);


function replaceWithHtml(pageTitle) {
    var displayArea = document.querySelector("div#displayarea");
    // server-side logic needs to sanitize input before returning anything
    fetch(pageTitle).then(function (response) {
        if (response.ok) {
            return response.text(); // don't forget to add return
        } else {
            console.log('Request failed with response status [%s] and message [%s]', response.status, response.statusText);
            return false;
        }
    }).then(function (result) {
        if (result === false) {
            displayArea.replaceChild(staticErrorPage, displayArea.firstChild);
        } else {
            var display = document.createElement("div");
            display.innerHTML = result;
            displayArea.replaceChild(display, displayArea.firstChild);
        }
    });
}