/**
* Execution       :   1. default node      cmd> node Singleton.js 
*  @Purpose         :Refer sigleton link and practice the various SIngleton Approaches that are
*                    possible. This includes
*  @file           : Singleton.js
*  @module         :  - init,getInstance
*  @author         : Dilip
*  @version        : 1.0
*  @since          : 02-11-2019

*/
const carObject = require("./singletonBl")
let originalCar = new carObject();
let firstInstance = originalCar.getInstance();
let secondInstance = originalCar.getInstance();

firstInstance.open();//open the  in first instance
secondInstance.shutDown();//shutDown the  in second instance
console.log(firstInstance.state());//if both computer instances of same object then computer should not be running
