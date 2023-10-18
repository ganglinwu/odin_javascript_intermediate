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

const foodImgArray = [[menu1,'TIROKROKETES \n fried cheese balls, greek feta, soft gouda, cheddar, eggplant, fresh basil leaves '], 
                        [menu2, 'ONION RINGS \n breaded onion rings, mayo-sriracha sauce'],
                         [menu3, 'TRUFFLE FRIES \n belgium potato, white truffle oil, grated parmesan'],
                          [menu4, 'PAPRIKA CRISPY WINGS \n hand breaded, lightly tossed in paprika powder'],
                           [menu5, 'MEAT LOVER BURGER \n double cheese, onion rings, bacon, 100g grain fed beef patty, potato bun'],
                            [menu6, 'CLASSIC MAGHERITA \n fresh tomato sauce, mozzarella, fresh basil leaves, olive oil']]
const drinkImgArray = [[coffee1, 'DRIP COFFEE \n ethiopia, notes: berries, elderflower'],
                        [coffee2, 'ESPRESSO \n single/double shot'],
                         [coffee3, 'ICED AMERICANO \n single shot espresso, filtered water'],
                          [tea1, 'MATCHA LATTE \n uji matcha espresso, soy/oat milk ']]

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
       const imgElement = createIMG(element[0], 'menu');
       const descriptionDiv = createDiv('description');
       descriptionDiv.innerText = element[1];

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
        const imgElement = createIMG(element[0], 'drink');
        const descriptionDiv = createDiv('description');
        descriptionDiv.innerText = element[1]

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