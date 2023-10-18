import menu1 from './img/menu1.png';
import menu2 from './img/menu2.png';
import menu3 from './img/menu3.png';
import menu4 from './img/menu4.png';
import menu5 from './img/menu5.png';
import menu6 from './img/menu6.png';

import coffee1 from './img/coffee1.png';
import coffee2 from './img/coffee2.png';
import coffee3 from './img/coffee3.png';

import tea1 from './img/tea1.png';

const foodImgArray = [menu1, menu2, menu3, menu4, menu5, menu6]
const drinkImgArray = [coffee1, coffee2, coffee3, tea1]

import { createDiv, createIMG } from '.';

export default function loadMenu() {
    const menuMainDiv = createDiv();
    menuMainDiv.setAttribute('id', 'menuMain');

    /* --------------------------------- */
    /* ----------- food menu ----------- */
    /* --------------------------------- */

    const foodMenuDiv = createDiv();
    foodMenuDiv.setAttribute('id', 'foodMenu');

    foodImgArray.forEach((element) => {
       const menuItem = createDiv('menuItemContainer');
       const imgElement = createIMG(element, 'menu');
       const descriptionDiv = createDiv('description');

       menuItem.appendChild(imgElement);
       menuItem.appendChild(descriptionDiv);

       foodMenuDiv.appendChild(menuItem);
   })

    menuMainDiv.appendChild(foodMenuDiv);
    
    /* ----------------------------------- */
    /* ----------- drinks menu ----------- */
    /* ----------------------------------- */
    
    const drinkMenuDiv = createDiv();
    drinkMenuDiv.setAttribute('id', 'drinkMenu');

    drinkImgArray.forEach((element) => {
        const menuItem = createDiv('drinkItemContainer');
        const imgElement = createIMG(element, 'drink');
        const descriptionDiv = createDiv('description');

        menuItem.appendChild(imgElement);
        menuItem.appendChild(descriptionDiv);

        drinkMenuDiv.appendChild(menuItem);
    })

    menuMainDiv.appendChild(drinkMenuDiv);

    return menuMainDiv
}

// Photo by serhii_bobyk on Freepik
// Photo by Arya Bajra www.pexels.com
// Photo by Dzenina Lukac www.pexels.com
// Photo by Pixabay www.pexels.com
// Photo by Natan Machado Fotografia Gastronômica www.pexels.com
// Photo by Kristina Paukshtite www.pexels.com


// Photo by Victor Freitas www.pexels.com
// Photo by Chevanon Photography www.pexels.com
// Photo by Casa Norte www.pexels.com

// Photo by Charlotte May www.pexels.com