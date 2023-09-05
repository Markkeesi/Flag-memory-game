const cards = document.querySelectorAll(".card");

let cardOne, cardTwo;

function flipCard(e) {
    let clickedCard = e.target;
    if(clickedCard !== cardOne) {

        clickedCard.classList.add("flip");
    
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        
        let cardOneImg = cardOne.querySelector("img.imgBack").src,
        cardTwoImg = cardTwo.querySelector("img.imgBack").src;
        pair(cardOneImg, cardTwoImg);
    }
}

function pair(img1, img2) {
    if(img1 === img2) {
        return console.log("Parilöyty");
    }
    return console.log("ei Parilöyty");
}

cards.forEach(card => {
    card.addEventListener("click", flipCard);    
});