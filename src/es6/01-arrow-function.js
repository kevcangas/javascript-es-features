function square(num) { //Función tradicional
    return num * num;
}

const square = (num) => { //Función flecha
    return num * num;
}

const square = num => num * num; //Función flecha forma reducida para return nada más

console.log(square(2));