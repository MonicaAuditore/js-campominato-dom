/*
BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

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

bombeArrayUno = [];

for (let b = 0; b < 16; b++) {
  let bombe = generaBombe(1, 100);

  while (bombeArrayUno.includes(bombe)) {
    bombe = generaBombe(1, 100);
  }
  bombeArrayUno.push(bombe);
}
console.log("BombeArrayUno", bombeArrayUno);

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
    for (let b = 0; b < bombeArrayUno.length; b++) {
      if (bombeArrayUno.includes(i)) {
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

console.log(
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
);
// creo GRIGLIA 2;

bombeArrayDue = [];

for (let b = 0; b < 16; b++) {
  let bombe = generaBombe(1, 81);

  while (bombeArrayDue.includes(bombe)) {
    bombe = generaBombe(1, 81);
  }
  bombeArrayDue.push(bombe);
}
console.log("BombeArrayDue", bombeArrayDue);

// creo GRIGLIA 2;
// creo le celle con classe cella all'interno della griglia;
for (let i = 1; i <= 81; i++) {
  // console.log(i);
  let div = document.createElement("div");

  // assegno un numero alle celle;
  div.innerHTML += i;
  div.classList.add("cella-medium");
  grigliaDue.append(div);

  const punteggio = document.querySelector(".count");
  let bombaEsplosa;

  // coloro di azzurro o di rosso la casella cliccata;
  div.addEventListener("click", function () {
    count++;
    punteggio.innerHTML = count;

    for (let b = 0; b < bombeArrayDue.length; b++) {
      if (bombeArrayDue.includes(i)) {
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
      grigliaDue.classList.add("stopClick");
      messaggio.classList.remove("hidden");
      vinto.classList.add("hidden");
    } else if (bombaEsplosa === false && count == 84) {
      grigliaDue.classList.add("stopClick");
      messaggio.classList.remove("hidden");
      perso.classList.add("hidden");
    }

    // stampo in console il numero che è stato cliccato.
    console.log("Cella cliccata numero:", i);
  });
}

console.log(
  "-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------"
);

// creo GRIGLIA 3;

bombeArrayTre = [];

for (let b = 0; b < 16; b++) {
  let bombe = generaBombe(1, 49);

  while (bombeArrayTre.includes(bombe)) {
    bombe = generaBombe(1, 49);
  }
  bombeArrayTre.push(bombe);
}
console.log("BombeArrayTre", bombeArrayTre);
// creo le celle con classe cella all'interno della griglia;
for (let i = 1; i <= 49; i++) {
  // console.log(i);
  let div = document.createElement("div");

  // assegno un numero alle celle;
  div.innerHTML += i;
  div.classList.add("cella-hard");
  grigliaTre.append(div);

  const punteggio = document.querySelector(".count");
  let bombaEsplosa;

  // coloro di azzurro o di rosso la casella cliccata;
  div.addEventListener("click", function () {
    count++;
    punteggio.innerHTML = count;

    for (let b = 0; b < bombeArrayTre.length; b++) {
      if (bombeArrayTre.includes(i)) {
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
      grigliaTre.classList.add("stopClick");
      messaggio.classList.remove("hidden");
      vinto.classList.add("hidden");
    } else if (bombaEsplosa === false && count == 84) {
      grigliaTre.classList.add("stopClick");
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
  if (livelli.value == "e") {
    grigliaUno.classList.remove("hidden");
    grigliaDue.classList.add("hidden");
    grigliaTre.classList.add("hidden");
  } else if (livelli.value == "m") {
    grigliaDue.classList.remove("hidden");
    grigliaUno.classList.add("hidden");
    grigliaTre.classList.add("hidden");
  } else if (livelli.value == "h") {
    grigliaTre.classList.remove("hidden");
    grigliaUno.classList.add("hidden");
    grigliaDue.classList.add("hidden");
  }
});

const reset = document.querySelector(".reset");
reset.addEventListener("click", function () {
  location.reload();
});
