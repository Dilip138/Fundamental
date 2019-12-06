/**
*  @Execution      :   1. default node      cmd> node deckOfCards.js 
*  @Purpose        : Write a Program ​ DeckOfCards.java ​ , to initialize deck of cards having suit ("Clubs",
*                    "Diamonds", "Hearts", "Spades") & Rank ("2", "3", "4", "5", "6", "7", "8", "9", "10",
*                    "Jack", "Queen", "King", "Ace"). Shuffle the cards using Random method and then
*                     distribute 9 Cards to 4 Players and Print the Cards the received by the 4 Players
*                     using 2D Array...
*  @file           : deckOfCards.js
*  @module         :  -Suits,Ranks
*  @author         : Dilip
*  @version        : 1.0
*  @since          : 31-10-2019
*/
let Suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
let Ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];
let n = Suits.length * Ranks.length;
let deck = [];
for (let i = 0; i < Ranks.length; i++) {
    for (let j = 0; j < Suits.length; j++) {
        deck[(Suits.length * i) + j] = Ranks[i] + " of " + Suits[j];
    }
}
/*Shuffle*/
for (let i = 0; i < n; i++) {
    let r = i + Math.floor((Math.random() * (n - i)));
    let temp = deck[r];
    deck[r] = deck[i];
    deck[i] = temp;
}
/*Display*/
for (i = 0; i < 4; i++) {
    console.log("** Person " + (i + 1) + " **");

    for (let j = 0; j < 9; j++) {
        console.log(deck[i + j * 4] + " (Card " + (i + j * 4) + ")");

    }
}
