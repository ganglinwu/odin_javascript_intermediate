function createDiv(className) {
    const div = document.createElement('div');
    div.classList.add(className);

    return div
}

document.body.appendChild(createDiv('content')); 
console.log('test!') //test to see if things are setup correctly
