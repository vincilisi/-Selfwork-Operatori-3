//Crea due variabili i cui valori verranno scelti dall’utente. Crea un programma che esegua i seguenti calcoli su quei due numeri:
//somma
//sottrazione
//moltiplicazione
//divisione
//potenza

//In seguito in console stampa la frase “Con i numeri da te scelti, i risultati delle varie operazioni sono: somma (tot), sottrazione(tot) ecc ecc“.

let num1 =parseFloat(prompt("Inserisci il primo numero:"));
let num2 = parseFloat(prompt("Inserisci il primo numero:"));

const somma = num1+num2;
const sottrazione = num2 - num1;
const moltiplicazione = num1*num2;
const divisione = num2/num1;
const potenza = num2**num1;

console.log(`Con i numeri da te scelti, i risultati delle varie operazioni sono: somma ${somma}, sottrazione ${sottrazione}, moltiplicazione ${moltiplicazione}, divisione ${divisione} e la potenza tra essi ${potenza}`);
