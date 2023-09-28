// example of factory function that creates a Player object

const Player = (name, level) => {
    let health = level * 2;
    const getLevel = () => level;
    const getName = () => name;
    const die = () => {
        console.log(`${name} has died`)
    };
    const damage = x => {
        health -= x;
        if (health<=0) {
            die();
        }
    };
    
    const attack = enemy => {
        if (level < enemy.getLevel()) {
            damage(1);
            console.log(`${enemy.getName()} has damaged ${name}`)
        }
        if (level >= enemy.getLevel()) {
            enemy.damage(1);
            console.log(`${name} has damaged ${enemy.getName()}`)
        }
    };

    return {attack, damage, getLevel, getName}; // only those in the curly brace is public, the rest of the code above is private
};

const jimmie = Player('jim', 10);
const badGuy = Player('jeff', 5);

jimmie.attack(badGuy);

/*  so the good thing about this code is health and die() are privately scoped and not accessible to others! 
   
    thus preventing others from meddling with it!
*/
