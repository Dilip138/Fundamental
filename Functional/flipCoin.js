/**
* @Execution : 1. default node cmd> node flipCoin.js
* @Purpose   : Flip Coin and print percentage of Heads and Tails.
* @file      : flipCoin.js
* @module    : flipCoin- This is optional if expeclictly its an npm or local package
* @author    : Dilip
* @version   : 1.0
* @since     : 15-10-2019
*/
const access=require('../Utility/Functional_Utility')
let input=require('readline-sync')
let toss=input.question("how many flip of numbers")
access.flipCoin(toss)
