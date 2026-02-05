console.log('test');

let boxNumbers = [];

for (let i = 0; i < 6; i++) {
    let numero = parseInt(prompt('Inserisci un numero: '));
    if (numero % 2 !== 0) {
        boxNumbers.push(numero);
    }
}
console.log(boxNumbers);