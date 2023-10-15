import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

import './style.css';

import fbSVG from './img/fb.svg';
import instaSVG from './img/insta.svg';
import logo from './img/logo-black-coloured.png';


// create header
const header = createDiv();
header.setAttribute('id','header');

const logoElement = createIMG(logo, 'logo');
logoElement.style.height = '6rem';
logoElement.style.width = '6rem';
header.appendChild(logoElement);

// create clickable tabs
['Home', 'Menu', 'Contact'].forEach((item) => {
    const div = createDiv();
    div.setAttribute('id', item.toLowerCase());
    div.innerText=item;
    header.appendChild(div);
})

document.body.appendChild(header)

// create content area
const contentDiv = createDiv();
contentDiv.setAttribute('id', 'content');
document.body.appendChild(contentDiv); 

// create footer
const footer = createDiv();
footer.setAttribute('id', 'footer');

// create social media container div
const socialMediaContainerDiv = createDiv('socialMediaContainerDiv');


[fbSVG, instaSVG].forEach((imgFile)=> {
    const imgElement = createIMG(imgFile);
    socialMediaContainerDiv.appendChild(imgElement);
});
footer.appendChild(socialMediaContainerDiv);

// photo credits - do not remove
const photoCredits = createDiv()
photoCredits.classList.add('footerText');
photoCredits.innerText = 'Photo by Praful Das www.pexels.com'

footer.appendChild(photoCredits);

document.body.appendChild(footer);


// eventlistener for home, menu, contact tabs

['Home', 'Menu', 'Contact'].forEach((item) => {
    document.getElementById(item.toLowerCase()).addEventListener('click', loadTab);
})

// helper function to create divs
function createDiv(className) {
    const div = document.createElement('div');
    if (className) {
        // if className empty don't add class to div
        div.classList.add(className);
    }
    return div
}

// helper function to create img elements
function createIMG(imgsrc, className) {
    const imgElement = new Image();
    imgElement.src = imgsrc;
    if (className) {
        imgElement.classList.add(className);
    }
    return imgElement;
}

export {createDiv, createIMG}
// export createDiv and createIMG

// helper function to remvoe all child nodes
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// function to load tab based on click event

function loadTab(evt) {
    removeAllChildNodes(contentDiv);
    switch (evt.target.id) {
        case 'home':
            contentDiv.appendChild(loadHome());
            break;
        case 'menu':
            loadMenu;
            break;
        case 'contact':
            loadContact;
            break;
    }
}

// load home page by default
window.addEventListener('DOMContentLoaded', contentDiv.appendChild(loadHome()));