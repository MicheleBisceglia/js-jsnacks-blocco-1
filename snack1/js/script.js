//jsnack1. L'utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

//chiedere parola 1
const parola1 = prompt("scrivi una parola");
console.log (parola1);

//chiedere parola 2
const parola2 = prompt("scrivi un altra parola");
console.log (parola2);

//confrontare lunghezza delle due parole
const parola1lenght = parola1.length;
const parola2lenght = parola2.length;
console.log(parola1lenght , parola2lenght);

//stampare il risultato
let result;
if (parola1lenght > parola2lenght) {
    result = `${parola1} ${parola2}`;
} else if (parola2lenght > parola1lenght) {
result = `${parola2} ${parola1}`;
} else { result = `le parole hanno la stessa lunghezza`}

console.log(result);
