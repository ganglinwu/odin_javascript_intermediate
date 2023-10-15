import menu1 from './img/menu1.jpeg';
import menu2 from './img/menu2.jpeg';
import menu3 from './img/menu3.jpeg';
import menu4 from './img/menu4.jpeg';
import menu5 from './img/menu5.jpeg';
import menu6 from './img/menu6.jpeg';

import coffee1 from './img/coffee1.jpeg';
import coffee2 from './img/coffee2.jpeg';
import coffee3 from './img/coffee3.jpeg';

import tea1 from './img/tea1.jpeg';

const menuImgArray = [menu1, menu2, menu3, menu4, menu5, menu6]
const coffeeImgArray = [coffee1, coffee2, coffee3]

import { createDiv, createIMG } from '.';

export default function loadMenu() {
    const menuMainDiv = createDiv();
    menuMainDiv.setAttribute('id', 'menuMain');

    /* --------------------------------- */
    /* ----------- food menu ----------- */
    /* --------------------------------- */

    const foodMenuDiv = createDiv();
    foodMenuDiv.setAttribute('id', 'foodMenu');

    menuImgArray.forEach((element) => {
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
    
    


    return menuMainDiv
}

// Image by serhii_bobyk on Freepik
// Photo by Arya Bajra www.pexels.com
// Photo by Dzenina Lukac www.pexels.com
// Photo by Pixabay www.pexels.com
// Photo by Natan Machado Fotografia Gastronômica www.pexels.com
// Photo by Kristina Paukshtite www.pexels.com


// Photo by Victor Freitas www.pexels.com
// Photo by Chevanon Photography www.pexels.com
// Photo by Casa Norte www.pexels.com

// Photo by Charlotte May www.pexels.com