const fs = require("fs");
const Util = require("./AdBoMain")
let jsonFile = JSON.parse(fs.readFileSync('AdresBook.json'))
Util.addressOperations(jsonFile)

module.exports={
    addressOperations
}