/**
* Execution       :   1. default node      cmd> node .js 
*                     
* 
*  @Purpose         : Create Object Oriented Analysis and Design of a simple ​ Address Book Problem​
* 
*  @file           : AddressBook.js
*  @module         :  - readFileSync,writeFileSync,addPerson,deletePerson,printFile,editPerson
*  @author         : Dilip
*  @version        : 1.0
*  @since          : 15-10-2019

*/

const fs = require("fs");
const Util = require("./AdBoMain")
let jsonFile = JSON.parse(fs.readFileSync('AdresBook.json'))
Util.addressOperations(jsonFile)

module.exports={
    addressOperations
}