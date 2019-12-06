/**
* @Execution : 1. default node cmd> node primeNumber.js
* @Purpose   : Computes the prime Number of N using brute force..
* @file      : primeNumber.js
* @module    : primeNumber- This is optional if expeclictly its an npm or local package
* @author    : Dilip
* @version   : 1.0
* @since     : 15-10-2019
*/
const access = require('../Utility/Functional_Utility');
let input = require('readline-sync');
const Input=input.question("enter the number");

access.primeNumber(Input)