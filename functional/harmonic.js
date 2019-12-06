/**
* @Execution : 1. default node cmd> node harmonic.js
* @Purpose   : Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N 
* @file      : harmonic.js
* @module    : harmonic- This is optional if expeclictly its an npm or local package
* @author    : Dilip
* @version   : 1.0
* @since     : 15-10-2019
*/
const access=require('../Utility/Functional_Utility')
let input=require('readline-sync')
 let inputNumber=input.question("enter the number")
 access.harmonic(inputNumber);
 