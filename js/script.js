const cards = document.querySelectorAll(".card");

let pairs = 0;
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
        pairs++;
        if(pairs == 6) {
            setTimeout(() => {
                return shuffleCard();
            }, 1000);
        }
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

function shuffleCard() {
    pairs = 0;
    cardOne = cardTwo = "";
    cards.forEach(card => {
        card.classList.remove("flip");
        card.addEventListener("click", flipCard);
    });
}

cards.forEach(card => {
    card.addEventListener("click", flipCard);    
});