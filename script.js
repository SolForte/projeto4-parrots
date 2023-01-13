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
let first_flip, second_flip = undefined;
function card_quantity_prompt(){
    card_quantity = Number(prompt("Com quantas cartas você jogar?"));
    if (card_quantity < 4 || card_quantity > 14 || card_quantity % 2 || isNaN(card_quantity)){
        card_quantity_prompt();
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
    /*
    If the user has an itchy finger, they might unintentionally trigger a bug if they click too fast
    Bug Description:
        -card_unflip (called by setTimout when the cards don't match) takes 1 second to happen due
        to setTimeout. As such, if the user calls the function again before setTimeout(card_unflip,1000)
        ends by itself: undesired things happens because the cards still aren't undefined yet to asign
        current_card value to them.
    Bug Fix & What the fix does:
        -At the start of the function, create a conditional to make it return; if both cards variables
        have values. That guarantees the function will only progress to it other statements if both cards
        variables are "empty" (that happens after setTimeout(card_unflip,1000)).
    */
    if (current_card.classList.contains("flip")) {
      return;
    }
    if (first_flip !== undefined && second_flip !== undefined) {
        return;
    } else {
        current_card.classList.add("flip");
    }
    if (first_flip === undefined) {
      first_flip = current_card;
    } else {
      if (second_flip === undefined) {
        second_flip = current_card;
  
        if (first_flip.innerHTML === second_flip.innerHTML) {
        //BUG: Apparently wrong syntax?
        //Solution: Stop trying to be smart and do the usual way.
          first_flip = undefined;
          second_flip = undefined;
        } else {
          setTimeout(card_unflip,1000);
        }
      }
    }
  }
function card_unflip() {
    first_flip.classList.remove("flip");
    second_flip.classList.remove("flip");
    //Same bug, fix...
    first_flip = undefined;
    second_flip = undefined;
}