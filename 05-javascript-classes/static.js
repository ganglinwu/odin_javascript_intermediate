// static properties and methods can only be called through class
// it cannot be called through instances of the class

class Player {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    // this is an instance method
    sayHi() {
        return `${this.name} waves and say hello!`
    }

    // this is a static method
    static greet(name, level) {
        return `${name} greets you warmly`
    }
}

// let's create an instance of Player 

let sven = new Player('Sven', 1);

console.log(sven.sayHi()) // outputs 'Sven waves and say hello!'
console.log(sven.greet()) // Error: greet is not a function

console.log(Player.sayHi('Nevs', 1)) // Error: sayHi is not a function
console.log(Player.greet('Nevs', 1)) // outputs 'Nevs greets you warmly'
