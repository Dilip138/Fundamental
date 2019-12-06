/**
* @Execution : 1. default node cmd> node stringReplace.js
* @Purpose   :User Input and Replace String Template “Hello <<UserName>>, How are you?”
* @file      : stringReplace.js
* @module    : stringReplace- This is optional if expeclictly its an npm or local package
* @author    : Dilip
* @version   : 1.0
* @since     : 15-10-2019
*/
const access=require('../Utility/Functional_Utility')
let input=require('readline-sync')
let str=input.question("Enter the string")
access.nameReplace(str)
