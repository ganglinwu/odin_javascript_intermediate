import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

import './style.css';

import fbSVG from './img/fb.svg';
import instaSVG from './img/insta.svg';
import logo from './img/logo-black-coloured.png';

import OpeningHours from "./dateTimeGenerator.js"


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
    let openingHours = new OpeningHours(11, 18, 9, 18);
    switch (evt.target.id) {
        case 'home':
            contentDiv.appendChild(loadHome());
            photoCredits.innerText = 'Photo by Praful Das www.pexels.com'
            break;
        case 'menu':
            contentDiv.appendChild(loadMenu());
            photoCredits.innerText = 'Photo by serhii_bobyk on Freepik \n Photo by Arya Bajra www.pexels.com \n Photo by Dzenina Lukac www.pexels.com \n Photo by Pixabay www.pexels.com \n Photo by Natan Machado Fotografia Gastronômica www.pexels.com \n Photo by Kristina Paukshtite www.pexels.com \n Photo by Victor Freitas www.pexels.com \n Photo by Chevanon Photography www.pexels.com \n Photo by Casa Norte www.pexels.com \n Photo by Charlotte May www.pexels.com'
            break;
        case 'contact':
            contentDiv.appendChild(loadContact(openingHours));
            photoCredits.innerText = ''
            addEvtListener(openingHours)
            break;
    }
}

    /* ----------------------------------- */
    /* --------- event listeners --------- */
    /* ----------------------------------- */


// load home page by default
window.addEventListener('DOMContentLoaded', contentDiv.appendChild(loadHome()));

// function to add event listener to update time slots when choosing dates
function addEvtListener(OpeningHours) {
    const timeDropdownMenu = document.getElementById('timeInput');
    const dateDropdownMenu = document.getElementById('dateInput');
    dateDropdownMenu.addEventListener('change', (evt)=> {
        removeAllChildNodes(timeDropdownMenu)
        console.log(evt);
        console.log(evt.target[0].selected);
        const chosenDate = new Date(evt.target.value);
        if (evt.target[0].selected) {
            const timeSlotToday = OpeningHours.getRemainingTimeSlotsToday(new Date());
            timeSlotToday.forEach((element) => {
                const optionElement = document.createElement('option');
                    optionElement.setAttribute('value', element);
                    optionElement.innerText = element
        
                    timeDropdownMenu.appendChild(optionElement)
            })
        } else {
            if (chosenDate.getDay()===6 || chosenDate.getDay()===0) {
                OpeningHours.wkendSlots.forEach((element)=> {
                    const optionElement = document.createElement('option');
                    optionElement.setAttribute('value', element);
                    optionElement.innerText = element
        
                    timeDropdownMenu.appendChild(optionElement)
                })
            } else {
                OpeningHours.wkdaySlots.forEach((element)=> {
                    const optionElement = document.createElement('option');
                    optionElement.setAttribute('value', element);
                    optionElement.innerText = element
        
                    timeDropdownMenu.appendChild(optionElement)
            })
        }
        }
    })
}