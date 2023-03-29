function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Kevin', 'Ricardo', 'Ulises', 'Jenny']);
console.log(it.next().value);
console.log(it.next().value);