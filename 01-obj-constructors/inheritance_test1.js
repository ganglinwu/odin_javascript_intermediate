// protytypal inheritance is a hot mess, if you need a refresher the recommended articles from odin proj helps tremendously
// it is only from reading multiple articles and gaining perspective from NUMEROUS examples
// that I only started to scratch the surface of this garbage fire

// below is a demonstration that using the call function doesn't cause prototype methods to be inherited
// i.e. you still have to call Object.setPrototypeOf(....) in order for Warrior to inherit Hero.prototype 

// call seems to be ES5, in ES6 we use class constructors and super()



function Hero(name, level) {
    this.name = name;
    this.level = level;
}

function Warrior(name, level, attack) {
    Hero.call(this, name, level);
    this.attack = attack;
}


Hero.prototype.greet = function () {
    return `${this.name} waves and say hello`
}








/* --------------------------------------------------------------- */
/* uncomment the two lines below to see that Sven cannot say hi :( */
/* --------------------------------------------------------------- */

// const sven = new Warrior('Sven', 1, 'Cleave');

// console.log(sven.greet());








/* --------------------------------------------------------------------------- */
/* uncomment the three lines below to let Nevs the Warrior wave and say hello! */
/* --------------------------------------------------------------------------- */
/* remember to comment out the two lines on top before running!                */
/* --------------------------------------------------------------------------- */

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);

const nevs = new Warrior('Nevs', 1, 'Cleave');

console.log(nevs.greet(), '\n');

