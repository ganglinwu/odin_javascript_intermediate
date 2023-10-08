// in eg2 we mentioned that we could cherry pick the properties or methods from other function factories

// but what if we wanted to copy wholesale? 

// don't worry JS has got you covered.. 

// that being said, do consider using protypal inheritance if we are expecting large number of objects (scale of >= 1000)

const Person = (name) => {
    const sayName = () => console.log(`my name is ${name}`);
}

const Nerd = (name) => {
    const faux_protoype = Person(name); 
    // we create a Person object in this scope
    // it can be used like a Person constructor prototype somewhat

    const doSomethingNerdy = () => console.log(`${name} wipes glasses`);

    return Object.assign({}, faux_protoype, {doSomethingNerdy});
    // usage: Object.assign(target, source1, source2, ..., sourceN)
    // assigns properties/methods(public) from all sources into target
    // target will become modified!
}

const adam = Nerd('adam');

adam.sayName(); // logs 'my name is adam'
adam.doSomethingNerdy(); // logs 'adam wipes glasses'