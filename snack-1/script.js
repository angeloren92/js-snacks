console.log('test');

const firstNumber = parseInt(prompt('Inserisci primo numero:'));
const secondNumber = parseInt(prompt('Inserisci secondo numero:'));

if (firstNumber < secondNumber) {
    alert('il numero maggiore è: ' + secondNumber);
} else if (firstNumber > secondNumber) {
    alert('il primo numero è il maggiore: ' + firstNumber);
} else {
    alert('I due numeri sono guauali!!');
}