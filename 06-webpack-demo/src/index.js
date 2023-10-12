import _ from 'lodash';
import myName from './myName';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.textContent = myName('Sven');
    element.classList.add('hello');

    btn.innerText = 'Click me and open the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());