/**
*  @Execution      :   1. default node      cmd> node addressBook.js 
*  @Purpose        : Create Object Oriented Analysis and Design of a simple ​ Address Book Problem​
*  @file           : addressBook.js
*  @module         :  - readFileSync,writeFileSync,addPerson,deletePerson,printFile,editPerson
*  @author         : Dilip
*  @version        : 1.0
*  @since          : 29-10-2019
*/
const fs = require("fs");
const Util = require("./addressBookBl")
let jsonFile = JSON.parse(fs.readFileSync('addresBook.json'))
Util.addressOperations(jsonFile)
module.exports = {
    addressOperations
}
