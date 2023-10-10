import _ from 'lodash';
import myName from './myName';

function component() {
    const element = document.createElement('div');

    // Lodash?? is required for this line to work
    element.textContent = myName('Sven');

    return element;
}

document.body.appendChild(component());