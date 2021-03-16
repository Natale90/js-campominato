// Consegna
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50


// Consigli del giorno: :party_wizard:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Proviamo prima con pochi numeri, inserire 86 numeri ogni volta potrebbe essere un po’ scocciante :occhiolino:
// Le validazioni e i controlli possiamo farli anche in un secondo momento.
// Ricordatevi che se non sappiamo quante volte dobbiamo fare una cosa ci serve…


// Impostazione di una funzione per la scelta del livello di difficolta


var level = prompt("Scegli un livello di difficolta, inserisci '0' per il livello easy, '1' per livello medium e '2' per il livello difficult ");
if (level == 0){

  var min = 1;
  var max = 20;
} else if (level == 1){

  var min = 1;
  var max = 15;
} else if (level == 2){

  var min = 1;
  var max = 10;
}

console.log(min, max);


// Impostazione di una funzione per il calcolo di numeri random

function getRandom(min, max){

  var minRnd = min;
  var maxRnd = max - min + 1;

  var numRnd = Math.floor(Math.random() * maxRnd) + minRnd;
  return numRnd;
}





//Impostazione della funzione per il Calcolo delle mine sul campo

function minesInTheField(){

  var mines = [];

  for (i = 0; i < 5; i++){

    var rnd = getRandom(min, max);
    while(mines.includes(rnd)){

      var rnd = getRandom(min, max);

    }
    mines.push(rnd);

  }

  return mines;
}

var mines = minesInTheField();
console.log(mines);



//impostazione della funzione per il calcolo i passi che muove il giocatore

function mineFieldGame(){

  var steps = [];
  // var punteggio = steps.length;
  for (i = 0; i < (max - min); i++){

    var playerNum = parseInt(prompt("muovi un passo nel campo minato, inserisci un numero compreso tra " + min +  " e " + max));
    while (steps.includes(playerNum)){

      alert("Hai gia selezionato questo numero. Seleziona un nuovo");
      var playerNum = parseInt(prompt("muovi un passo nel campo minato, inserisci un nuovo numero compreso tra " + min + " e " + max));

    }

    if (mines.includes(playerNum)){

      alert("Ooops! You Loose");
      console.log(steps);
      return console.log(" il tuo punteggio è " + steps.length);
    } else {

      steps.push(playerNum);
    }

  }

  alert("Hai completato il gioco, complimenti");
  return console.log("Fine della partita il tuo punteggio è " + steps.length);
  // console.log("Fine della partita il tuo punteggio è " + steps.length);
}


document.getElementById('startbutton').onclick = function(){mineFieldGame()};
