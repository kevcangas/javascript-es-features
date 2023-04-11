//setters getters

class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //Métodos
    #speak() { //Al colocar # se convierte el método en privado
        return 'Hello';
    }

    greeting() {
        return console.log(`${this.speak()} ${this.name}`);
    }
    
    get #uAge() {
        return this.age;
    }
    
    set #uAge(n) {
        this.age = n;
    }
}

const ric = new User('Kev', 23);
ric.uAge;
ric.uAge = 24;