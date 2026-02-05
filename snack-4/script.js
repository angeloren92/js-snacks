console.log('test');

let somma = 0;

for (let i = 0; i < 6; i++) {
    let numero = parseInt(prompt('Inserisci un numero: '));
    if (numero % 2 !== 0) {
        somma = somma + numero;
    }
}
console.log(somma);