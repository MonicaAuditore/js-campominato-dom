# js-campominato-dom

Gioco: Campo Minato
nome repo: js-campominato-dom

Milestone I
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Milestone II
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

Milestone III
Aggiungiamo la logica del gioco.
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.

Milestone III
Ho aggiunto una grafica a mia scelta.

Fonti:

immagine: sfondo, ufo, meteorite
autore: @upklyak
link freepick: https://it.freepik.com/autore/upklyak

immagine: Stella
autore: designed by freepik
link freepick: https://it.freepik.com/vettori-gratuito/collezione-di-stelle-lucenti-di-sei_1582967.htm#page=2&query=star&position=2&from_view=search&track=sph

immagine: pulsanti
autore: @vectorpouch
link freepick: https://it.freepik.com/autore/vectorpouch

google font: audiowide
link: https://fonts.google.com/specimen/Audiowide

sound: pulsante start
autore: MikeE63
link free sound: https://freesound.org/people/MikeE63/
