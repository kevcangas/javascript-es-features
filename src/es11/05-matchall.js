const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Kiwi, Orange';

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}