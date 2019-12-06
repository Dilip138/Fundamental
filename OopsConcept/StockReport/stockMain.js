/**
*  @Execution      :   1. default node      cmd> node stockMain.js 
*  @Purpose        : Write a program to read in Stock Names, Number of Share, Share Price.
*                     Print a Stock Report with total value of each Stock and the total value of Stock.
*  @file           : stockMain.js
*  @module         :  - StockName,NoOfShares,SharePrice,total
*  @author         : Dilip
*  @version        : 1.0
*  @since          : 15-10-2019
*/
let list = require('./Stock')
let fs = require('fs')
let util = fs.readFileSync('stock.json', 'utf8')
let obj = JSON.parse(util)
console.log(util);
console.log('====================================');
console.log("Resultant of Stoke");
console.log('====================================');
let len = obj.Stock.length;

for (let i = 0; i < len; i++) {
  let StockName = obj.Stock[i].StockName;
  let NumOfShares = obj.Stock[i].NumOfShares;
  let SharePrice = obj.Stock[i].SharePrice;
  let company = new list(StockName, NumOfShares, SharePrice);
  let total = company.total();
  console.log("Name : " + StockName + " , " + "NumOfShares : " + NumOfShares + " , " + "SharePrice : " + SharePrice);
  console.log("Total value of stock is =" + total)
} 
