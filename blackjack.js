let start = document.getElementById("start");
let balance = document.getElementById("balanceEl")
let messageEl = document.getElementById("message");
let sumEl = document.getElementById("sumEl");
let cardEl = document.getElementById("cardEl");
let newcEl = document.getElementById("newcEl");
let cards = [];
let sum = 0;
let hasblackjack = false
let isAlive = true
let count = 0 

// let usr_name = "user_1"
// let balance_usr = 200;

let usr = {
    name: "user_1",
    balance: 200
}

function getrandomCard(){
    let num = Math.floor(Math.random()*13) + 1;
    if(num == 1){
        return 11;
    } 
    if (num >= 11){
        return 10;
    }
    return num;
}

//sumEl.querySelector = "Sum: " + sum;
let message = "";
function startgame(){ 
    if (usr.balance >= 50) {
        firstCard = getrandomCard()
        secondCard = getrandomCard()
        cards = [firstCard, secondCard];
        hasblackjack = false
        isAlive = true
        sum = firstCard + secondCard;
        usr.balance = usr.balance - 50
        balance.textContent = usr.name + ": $" + usr.balance;
        rendergame()
    } else {
        messageEl.textContent = "Insufficient funds"
    }

}
function rendergame(){ 
    cardEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + ", "
        // console.log(cards[i])
    }
    // cardEl.textContent = "Cards: " + cards // why not simply use this and why use the above for loop?
    console.log("The game has started");
    sumEl.textContent = "Sum: " + sum;
        if (sum <= 20) {
            message  = "Do you want to draw a new card?"
        } else if (sum === 21) {
            message = "You've got blackjack"
            usr.balance = usr.balance + 100
            balance.textContent = usr.name + ": $" + usr.balance;
            hasblackjack = true;
        } else {
            message = "You're out of the game!"
            isAlive = false;
        }
        messageEl.textContent = message;
}

function newcard(){
    if (usr.balance >= 50 && isAlive === true && hasblackjack === false) {
        let newcard;
        // newcEl.textContent = "Drawing a new card from the deck"
        newcard = getrandomCard()
        // newcEl.textContent = "You drew a " + newcard;
        sum = sum + newcard;
        // newcEl.textContent = "Sum of your cards is " + sum;
        cards.push(newcard);
        rendergame(); // whenever the function newcard is called it will also check all the conditions listed in the star game function
        count++;
    } else {
        newcEl.textContent = "You are already out of the game"
    }

}



