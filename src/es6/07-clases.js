class User {

};

//const newUser = new User();

class user {
    // métodos
    greeting() {
        return console.log("Hello!");
    }
};

const kev = new user();
kev.greeting();
const bebeloper = new user();
bebeloper.greeting();

//constructor

class user {
    constructor() {
        console.log("Nuevo usuario");
    };
    greeting() {
        return console.log("Hello!");
    };
};

const kev2 = new user()
kev2.greeting()

//this

class user {
    constructor(name) {
        this.name = name;
    };
    //Métodos
    speak() {
        return "Hello";
    };
    greeting() {
        return `${this.speak()} ${this.name}`;
    };
};

const kev3 = new user('Kevin');
console.log(kev3.greeting()); 

//setters getters

class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //Métodos
    speak() {
        return 'Hello';
    }

    greeting() {
        return console.log(`${this.speak()} ${this.name}`);
    }
    
    get uAge() {
        return this.age;
    }
    
    set uAge(n) {
        this.age = n;
    }
}

const ric = new User('Kev', 23);
ric.uAge;
ric.uAge = 24;

