import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

import './style.css';

import fbSVG from './img/fb.svg';
import instaSVG from './img/insta.svg';


// create header
const header = createDiv();
header.setAttribute('id','header');

// create clickable tabs
['Home', 'Menu', 'Contact'].forEach((item) => {
    const div = createDiv();
    div.setAttribute('id', item.toLowerCase());
    div.innerText=item;
    header.appendChild(div);
})

document.body.appendChild(header)

// create content area
const contentDiv = createDiv()
contentDiv.setAttribute('id', 'content');
document.body.appendChild(contentDiv); 

// create footer
const footer = createDiv();
footer.setAttribute('id', 'footer');
[fbSVG, instaSVG].forEach((imgElement)=> {
    const a = new Image();
    a.src = imgElement
    footer.appendChild(a);
});

document.body.appendChild(footer);


// helper function to create divs
function createDiv(className) {
    const div = document.createElement('div');
    if (className) {
        // if className empty don't add class to div
        div.classList.add(className);
    }
    return div
}

