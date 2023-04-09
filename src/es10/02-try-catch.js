try {
    hello();
} catch (error) {
    console.log(error);
}

try {
    anotherFcn();
} catch {
    console.log('Esto es un error');
}