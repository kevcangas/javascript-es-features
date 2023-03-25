var lastName = 'Kevin';
lastName = 'Ricardo';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
animal = 'Cat'; //No se puede reasignar una const una vez que ya se creó
console.log(animal);


const fruits = () => {
    if(true) {
        var fruit1 = 'Apple'; //function scope (es global)
        let fruit2 = 'Kiwi'; //block scope (no es global)
        const fruit3 = 'Banana'; //block scope (No es global)
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();