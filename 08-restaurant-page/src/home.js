import { createDiv, createIMG } from "./index.js";
import splashIMGFile from './img/latte-art.jpeg'


export default function loadHome() {
    //create splash container
    const splash = createDiv('splash');
    splash.setAttribute('id', 'splash')

    //create img 
    const splashImgElement = createIMG(splashIMGFile)

    //create text div with class 'splashText1'
    const splashText1 = createDiv('splashText1');
    splashText1.innerText = 'COME TO ODIN\'S'
    
    //create text div with class 'splashText2'
    const splashText2 = createDiv('splashText2');
    splashText2.innerText = 'FOR A WARM CUPPA JOY!'
    
    //append img to splash
    splash.appendChild(splashImgElement);
    splash.appendChild(splashText1);
    splash.appendChild(splashText2);
    
    //return (and append to content div)
    return splash
}
