// here's an example on when static methods could be useful
//
// this example is taken from mdn web docs

class Point {
    constructor (x,y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const run = a.x - b.x;
        const rise = a.y - b.y;

        return Math.hypot(run, rise);
    }

    static gradient(a, b) {
        const run = a.x - b.x;
        const rise = a.y - b.y;

        return rise/run;
    }
}

const p1 = new Point(1, 1);
const p2 = new Point(3, 5);

console.log(Point.distance(p1, p2));
console.log(Point.gradient(p1, p2));