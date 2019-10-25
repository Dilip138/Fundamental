/**
* Execution       :   1. default node      cmd> node .js 
*                     
* 
*  @Purpose         : A palindrome is a string that reads the same forward and backward, for
*                     example, radar, toot, and madam. We would like to construct an algorithm to
*                     input a string of characters and check whether it is a palindrome.
* 
*  @file           : PalChecker.js
*  @module         :  - addFront,addRear,RemoveFront,RemoveRear,Size,Pallindrome
*  @author         : Dilip
*  @version        : 1.0
*  @since          : 15-10-2019

*/

const readline=require('readline-sync')
const access=require('../Utility/Datastructure_ListAndQueue_Utility')
let b=new access.Deque()
let str=readline.question("enter the string")
let checkPallindrome=b.palindrome(str)
console.log(checkPallindrome)




