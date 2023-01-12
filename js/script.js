/*
II PARTE

Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: 
  non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, 
  e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. 
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati 
- abbiamo calpestato una bomba 
- la cella si colora di rosso e la partita termina. 
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti 
(ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, 
cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.

10. genero 16 numeri casuali da 1 a 100;
11. li inserisco in un array, se nell'array in numero è già presente ne genero uno nuovo altrimenti lo inserisco;

12. se il numero su cui clicca l'utente è uguale a un numero dentro l'array di bombe, allora è su una bomba, la casella si colora di rosso, perde e finisce il gioco;
altrimenti la casella si colora di azzurro e l'utente può continuare a cliccare su altre caselle;

13. se il giocatore clicca su 100 caselle - 16(bombe) = 84 senza trovare la bomba, VINCE;
14. alla fine viene emesso il punteggio che è il n° di volte che l'utente ha cliccato su una cella senza far esplodere la bomba.
*/

function generaBombe(min, max) {
  numeroBombe = Math.floor(Math.random() * (max - min)) + min;
  return numeroBombe;
}

bombeArray = [];

for (let b = 0; b < 16; b++) {
  let bombe = generaBombe(1, 100);

  while (bombeArray.includes(bombe)) {
    bombe = generaBombe(1, 100);
  }
  bombeArray.push(bombe);
}
console.log("BombeArray", bombeArray);

const bottone = document.querySelector(".btn");
const grigliaUno = document.getElementById("grigliaUno");
const grigliaDue = document.getElementById("grigliaDue");
const grigliaTre = document.getElementById("grigliaTre");

const messaggio = document.querySelector(".messaggioPunteggio");
const perso = document.querySelector(".perso");
const vinto = document.querySelector(".vinto");

let count = 0;

// creo le celle con classe cella all'interno della griglia;
for (let i = 1; i <= 100; i++) {
  // console.log(i);
  let div = document.createElement("div");

  // assegno un numero alle celle;
  div.innerHTML += i;
  div.classList.add("cella");
  grigliaUno.append(div);

  const punteggio = document.querySelector(".count");
  let bombaEsplosa;

  // coloro di azzurro o di rosso la casella cliccata;
  div.addEventListener("click", function () {
    count++;
    punteggio.innerHTML = count;
    for (let b = 0; b < bombeArray.length; b++) {
      if (bombeArray.includes(i)) {
        div.classList.add("cellaCliccataBomba");

        bombaEsplosa = true;
        console.log("bombaEsplosa", bombaEsplosa);
      } else {
        div.classList.add("cellaCliccata");
        bombaEsplosa = false;
        console.log("bombaEsplosa", bombaEsplosa);
      }
    }

    if (bombaEsplosa === true) {
      grigliaUno.classList.add("stopClick");
      messaggio.classList.remove("hidden");
      vinto.classList.add("hidden");
    } else if (bombaEsplosa === false && count == 84) {
      grigliaUno.classList.add("stopClick");
      messaggio.classList.remove("hidden");
      perso.classList.add("hidden");
    }

    // stampo in console il numero che è stato cliccato.
    console.log("Cella cliccata numero:", i);
  });
}

const livelli = document.getElementById("levels");

// al click del bottone "play" mostro la griglia in base alla scelta della difficoltà;
bottone.addEventListener("click", function () {
  grigliaUno.classList.remove("hidden");
});
