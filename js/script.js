const cards = document.querySelectorAll(".card");

let cardOne, cardTwo;
let disable = false;

function flipCard(e) {
    let clickedCard = e.target;
    if(clickedCard !== cardOne && !disable) {

        clickedCard.classList.add("flip");
    
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disable = true;
        let cardOneImg = cardOne.querySelector("img.imgBack").src,
        cardTwoImg = cardTwo.querySelector("img.imgBack").src;
        pair(cardOneImg, cardTwoImg);
    }
}

function pair(img1, img2) {
    if(img1 === img2) {
        cardOne.removeEventListener("click" ,flipCard);
        cardTwo.removeEventListener("click" ,flipCard);
        cardOne = cardTwo = "";
        return disable = false;
    }
    
    setTimeout(() => {
        cardOne.classList.remove("flip");
        cardTwo.classList.remove("flip");
        cardOne = cardTwo = "";
        disable = false;
    }, 1000);
}

cards.forEach(card => {
    card.addEventListener("click", flipCard);    
});