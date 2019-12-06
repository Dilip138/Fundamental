/**
* @Execution : 1. default node cmd> node primeFactor.js
* @Purpose   :Computes the prime factorization of N using brute force..
* @file      : primeFactor.js
* @module    : primeFactor- This is optional if expeclictly its an npm or local package
* @author    : Dilip
* @version   : 1.0
* @since     : 15-10-2019
*/
const access = require('../Utility/Functional_Utility');
let input = require('readline-sync');
let userInput=input.question('please enter num:')
access.primeFactor(userInput);
