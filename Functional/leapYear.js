/**
* @Execution : 1. default node cmd> node leapYear.js
* @Purpose   : Print the year is a Leap Year or not.
* @file      : leapYear.js
* @module    : leapYear- This is optional if expeclictly its an npm or local package
* @author    : Dilip
* @version   : 1.0
* @since     : 15-10-2019
*/
const access=require('../Utility/Functional_Utility')
let input=require('readline-sync')
let userInput=input.question("enter the year")
 access.leapYear(userInput);
 