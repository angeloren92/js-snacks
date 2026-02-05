console.log('test');

//utente inserisce 2 parole, il prompt stampa prima la parola piu corta e poi la piu lunga

const parola1 = prompt('inserisci una parola: ');
const parola2 = prompt('inserisci altra parola: ');
const lunghezza = [parola1.length, parola2.length];

if (isNaN(parola1 && parola2)) {
    let message;
    if (lunghezza[0] < lunghezza[1]) {
        console.log(parola2);
    } else if (lunghezza[0] > lunghezza[1]) {
        console.log(parola1);
    } else {
        message = 'le parole sono della stessa lunghezza';
        console.log(message);
    }
} else {
    message = 'inserisci delle parole!!!'
    alert(message);
}