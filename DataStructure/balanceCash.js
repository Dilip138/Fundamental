/**
*  @Execution      :   1. default node      cmd> node balanceCash.js 
*  @Purpose        : Create a Program which creates Banking Cash Counter where people come in to 
*                    deposit Cash and withdraw Cash. Have an input panel to add people to Queue to 
*                    either deposit or withdraw money and dequeue the people. Maintain the Cash Balance.
*  @file           : balanceCash.js
*  @module         : BlanceCash - This is optional if expeclictly its an npm or local package
*  @author         : Dilip 
*  @version        : 1.0
*  @since          : 15-10-2019
*/
let list = require('../Utility/Datastructure_ListAndQueue_Utility')
let q = new list.Queue()
let input = require('readline-sync')
let num1 = input.question("Enter the no of input")
for (let i = 0; i < num1; i++) {
    let data1 = input.question("Enter the data")
    q.enqueue(data1)
}
let num2 = input.question("Enter the no of input")
for (let i = 0; i < num2; i++) {
    q.dequeue(i)
}
console.log("Dequeued item is " + q.dequeue().data)
