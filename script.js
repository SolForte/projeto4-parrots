let deck = []; //baralho vazio ao invés de com 14 itens para poder dar array.push
const suit = [
"bobrossparrot.gif",
"bobrossparrot.gif",
"explodyparrot.gif",
"explodyparrot.gif",
"fiestaparrot.gif",
"fiestaparrot.gif",
"metalparrot.gif",
"metalparrot.gif",
"revertitparrot.gif",
"revertitparrot.gif",
"tripletsparrot.gif",
"tripletsparrot.gif",
"unicornparrot.gif",
"unicornparrot.gif"];
let card_quantity = 0;
let first_flip = undefined;
let second_flip = undefined;
let play_counter = 0;
let correct_plays = 0;
function card_quantity_prompt(){
    card_quantity = Number(prompt("Com quantas cartas você jogar?"));
    while (card_quantity < 4 || card_quantity > 14 || card_quantity % 2 || isNaN(card_quantity)){
        card_quantity = Number(prompt("Com quantas cartas você jogar?"));
    }
    create_cards();
}
function comprador(){
    return Math.random() - 0.5;
}
function create_cards(){
    let i = 0;
    let j = 0;
    while (i < card_quantity){
        deck.push(suit[i]);
        i=i+1;
    }
    deck.sort(comprador);
    let playmat = document.querySelector(".play-area");
    while (j < deck.length){
        let card_model = `
        <div class="card" onclick="card_flip(this)">
        <div class="front-face face">
            <img alt="" src="assets/back.png">
        </div>
        <div class="back-face face">
            <img alt="" src="assets/${deck[j]}">
        </div>
        </div>
        `
        playmat.innerHTML = playmat.innerHTML + card_model;
        j=j+1;
    }
}
function card_flip(current_card) {
    if (current_card.classList.contains("flip")) {
      return;
    }
    if (first_flip !== undefined && second_flip !== undefined) {
        return;
    } else {
        current_card.classList.add("flip");
        play_counter = play_counter + 1;
    }
    if (first_flip === undefined) {
      first_flip = current_card;
    } else {
      if (second_flip === undefined) {
        second_flip = current_card;
  
        if (first_flip.innerHTML === second_flip.innerHTML) {
          first_flip = undefined;
          second_flip = undefined;
          correct_plays = correct_plays + 2;
        } else {
          setTimeout(card_unflip,1000);
        }
      }
    }
    if (correct_plays === card_quantity){
        alert(`Você ganhou em ${play_counter} jogadas!`);
      }
  }
function card_unflip() {
    first_flip.classList.remove("flip");
    second_flip.classList.remove("flip");
    first_flip = undefined;
    second_flip = undefined;
}