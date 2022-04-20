//Crea un array vuoto. Chiedi per 6 volte all'utente di inserire un numero,
//se è dispari inseriscilo nell'array.

//crea un array vuoto
const arreyVuoto = [];

//chiedere per 6 volte un numero
for (let i=0; i < 6; i++) {
    const numero = parseInt(prompt("scrivi un numero"));
    console.log(numero);

//controllare se il numero è pari o dispari 
if (numero % 2 === 1) {
    arreyVuoto.push(numero)}
}

console.log(arreyVuoto)

