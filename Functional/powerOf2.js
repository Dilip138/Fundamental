/**
* @Execution : 1. default node cmd> node powerOf2.js
* @Purpose   : prints a table of the powers of 2 that are less than or equal to 2^N
* @file      : powerOf2.js
* @module    : powerOf2- This is optional if expeclictly its an npm or local package
* @author    : Dilip
* @version   : 1.0
* @since     : 15-10-2019
*/
const access=require('../Utility/Functional_Utility')
let input=require('readline-sync')
let userInput=input.question("Enter the number")
access.power2(userInput);
