/* eslint-disable max-classes-per-file, no-console */

// put your code here
// class Sportsman {
//     constructor(name) {
//         this.name = name;
//     }
//     run() {
//         console.log(`${this.name} is running`);
//     }
// }

// class Swimmer extends Sportsman {
//     constructor(name, style) {
//         this.name = name;
//         this.style = style;
//     }
//     swim() {
//         console.log(`${this.name} is swimming ${this.style}`);
//     }
// }
// const swimmer = new Sportsman('John');
// swimmer.run();
// console.log(swimmer);

// const breaststroke1 = new Swimmer('John', 'breaststroke');
// breaststroke1.swim();
// console.log(breaststroke1);


class Sportsman {
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log(this);
        console.log(`${this.name} is running`);
    }
}


class Swimmer extends Sportsman {
    constructor(name, swimStyle) {
        super(name);
        this.swimStyle = swimStyle;
    }
    swim() {
        console.log('context is ', this);
        console.log(`${this.name} is swimming ${this.swimStyle}`);
    }
}


//test data

const obj1 = {
    name: 'James',
}
console.log(obj1);

const obj = new Sportsman('John');
console.log(obj);



const swimObj = new Swimmer('Masha', 'testStyle');
swimObj.run();
swimObj.swim();
console.log(swimObj);