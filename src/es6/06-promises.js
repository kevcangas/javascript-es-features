//Asincronismo en JavaScript

const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Funcionó");
        }
        else {
            reject("No funcionó");
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));
