function card_quantity_prompt(){
    let card_quantity = Number(prompt("Com quantas cartas você jogar?"));
    if (card_quantity < 4 || card_quantity > 14 || card_quantity % 2 || isNaN(card_quantity)){
        console.log("Retry!");
        card_quantity_prompt();
    }
    console.log("Go!");
    //game start function;
}

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