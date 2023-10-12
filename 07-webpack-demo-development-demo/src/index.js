import printMe from './print.js';

function component () {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerText = 'We are learning how webpack can help during development'

    btn.innerText = 'Click me and open console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());