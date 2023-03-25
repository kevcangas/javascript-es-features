//arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);


//Object destructuring

let user = { 
    username: 'Kevin', 
    age: 23
};
let { username, age } = user;
console.log(username, user.age);


//Spread operator

let person = { name: 'ricardo', age: 23 };
let country = 'MX';

let data = { ...person, country }; //... es el operador spread (propagación)
console.log(data);


//rest

function sum(num, ...values) { //Junta todos los valores en un array despues del ...
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3 ,4);