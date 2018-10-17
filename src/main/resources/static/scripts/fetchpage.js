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
    var displayArea = document.querySelector("div#contents");
    // server-side logic needs to sanitize input before returning anything
    fetch(pageTitle+'.html').then(function (response) {
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
        	var childNode = htmlToElement(result);
        	if(displayArea.childElementCount > 0){
        		displayArea.replaceChild(childNode,displayArea.firstChild);
        	}else{        		
        		displayArea.appendChild(childNode);
        	}
        }
    });
}

/**
 * @param {String} HTML representing a single element
 * @return {Element}
 */
function htmlToElement(html) {
	// template elmeent introduced in HTML5 has no restrictions on children
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}