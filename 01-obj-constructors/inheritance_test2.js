// further demonstration that the call() function only copies over properties and NOT methods

// so why use call()?
// i have no freakign clue

function Hero(name, level) {
    this.name = name;
    this.level = level;

    this.goodbye = function () {
        return `${this.name} waves goodbye!`
    }
}

function Warrior(name, level, attack) {
    // uncomment below two lines instead of call() to have Sven and Nevs instead of undefined
    // this.name = name;
    // this.level = level;
    
    Hero.call(name, level); //   <-----------------   call() used here
    this.attack = attack;
}

Hero.prototype.greet = function () {
    return `${this.name} waves and say hello!`
}

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);

const sven = new Warrior('Sven', 1, 'Cleave');

console.log(sven.greet(), '\n');

/* ---------------------------------------------------------------- */
/* uncomment the lines below to see that Sven cannot say goodbye :( */
/* ---------------------------------------------------------------- */

// console.log(sven.goodbye());




/* --------------------------------------------------------------------------- */
/* uncomment the three lines below to let Nevs the Warrior bid farewell        */
/* --------------------------------------------------------------------------- */

Hero.prototype.farewell = function () {
    return `${this.name} bids you adieu and bows politely`
}

const nevs = new Warrior('Nevs', 1, 'Cleave');

console.log(nevs.farewell());