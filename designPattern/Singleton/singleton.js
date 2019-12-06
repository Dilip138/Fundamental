/**
*  @Execution      :   1. default node      cmd> node Singleton.js 
*  @Purpose        : Refer sigleton link and practice the various SIngleton Approaches that are
*                    possible. This includes
*  @file           : Singleton.js
*  @module         :  - init,getInstance
*  @author         : Dilip
*  @version        : 1.0
*  @since          : 02-11-2019
*/
const singleton = require("./singletonBl")
let computerObj = new singleton();
let firstInstance = computerObj.getInstance();
let secondInstance = computerObj.getInstance();

firstInstance.open();//open the  in first instance
secondInstance.shutDown();//shutDown the  in second instance
console.log(firstInstance.state());//if both computer instances of same object then computer should not be running
