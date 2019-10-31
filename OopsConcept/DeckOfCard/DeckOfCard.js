/**
* Execution       :   1. default node      cmd> node .js 
*                     
* 
*  @Purpose         : Create a JSON file having Inventory Details for Rice, Pulses and Wheats
*                     with properties name, weight, price per kg.
* 
*  @file           : DeckOfCards.js
*  @module         :  - Rice,Pulses,Wheat,total
*  @author         : Dilip
*  @version        : 1.0
*  @since          : 15-10-2019

*/
  
let  Suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
let   Ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

let n = Suits.length * Ranks.length;
let deck = [];
for (let i=0;i<Ranks.length;i++) {
for (let j=0;j<Suits.length;j++) {
    deck[(Suits.length*i) + j] = Ranks[i] + " of " + Suits[j];
}
}
/*Shuffle*/
for (let i = 0; i < n; i++) {
let r = i + Math.floor((Math.random() * (n-i)));
let temp = deck[r];
deck[r] = deck[i];
deck[i] = temp;
}
/*Display*/
for ( i = 0; i < 4; i++) {
console.log("** Person " + (i + 1) + " **");

for (let j = 0; j < 9; j++) {
    console.log(deck[i + j * 4] + " (Card " + (i + j * 4) + ")");
    
    }
}

    
  
    
    
        
    
  