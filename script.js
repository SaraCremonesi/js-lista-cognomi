
// Creo un array con la lista dei cognomi
var surnameList = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi']

// Setto come "vuota" la variabile del cognome dato in input
var surnameInput = '';

// Creo un ciclo while che mi continui a chiedere di inserire un cognome
// fino a che non ne inserisco uno
while (surnameInput === '') {
  surnameInput = prompt('Inserisci il tuo cognome');

  // Funzione per inserire un elemento dentro ad un array
  surnameList.push(surnameInput);

  // Funzione per ordinare alfabeticamente un array
  surnameList.sort();
}

alert('Lista ordinata alfabeticamente: ' + surnameList);

// .indexOf() è una funzione che mi permette di trovare,
// all'interno di un array, l'indice di un elemento,
// poi aggiungo un +1 per la posizione "umanamente parlando"
alert('Il cognome inserito è in ' + (surnameList.indexOf(surnameInput) + 1) + 'a posizione');
