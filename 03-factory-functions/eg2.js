// so factory functions are known not to pollute global scope
// (global scope can be polluted when calling object constructor without the 'new' keyword)

// however one downside(?) would be that object created via factory functions do not utilize prototypes(*)
// there are workarounds to this, which is actually quite a good workaround

// instead of copying wholesale the protoype of another object constructor, we could cherry pick what we want!
// see example below

const Person = (name) => {
    const sayName = () => {
        console.log(`my name is ${name}`);
    }
    return {sayName}; // make sayName method public
}

const Nerd = (name) => {
    const {sayName} = Person(name); 
    // curly braces on LHS is the ES6 destructuring assignment 
    // essentially we want to copy the method sayName from Person and also name it sayName
    // if we wanted to copy the method but give it a different name
    /* 
    
    const {sayName: iLikeThisNameBetter} = Person(name);
    
    */
    
    const doSomethingNerdy = () => {
        console.log(`${name} wipes glasses`);
    }

    return {sayName, doSomethingNerdy};
}

const adam = Nerd('adam'); //sorry to all adams out there

adam.sayName(); // logs 'my name is adam'
adam.doSomethingNerdy(); // logs 'adamn wipes glasses'