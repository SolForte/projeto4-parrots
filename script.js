let deck = []; //baralho vazio ao invés de com 14 itens para poder dar array.push
let suit = [
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
function card_quantity_prompt(){
    card_quantity = Number(prompt("Com quantas cartas você jogar?"));
    if (card_quantity < 4 || card_quantity > 14 || card_quantity % 2 || isNaN(card_quantity)){
        card_quantity_prompt();
    }
    create_cards();
}
function create_cards(){
    let i = 0;
    while (i < card_quantity){
        deck.push(suit[i]);
        i=i+1;
    }
}
card_quantity_prompt()
/* model for innerHTML +=
`<div class="card">
    <div class="front-face face">
        <img alt="" src="assets/back.png">
    </div>
    <div class="back-face face">
        <img alt="" src="">
    </div>
</div>`
*/