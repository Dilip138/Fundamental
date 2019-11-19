/**
* @Execution      :   1. default node      cmd> node factoryPattern.js
*  @Purpose         :Use ​ Factory Pattern to create a Computer Factory that can Produce PC, Laptop and
*                    Server Class Computers. As Shown in the Figure Below Create an Abstract Computer
*                    Class and PC, Laptop and Server inherit from Computer and ComputerFactory is able
*                    to create the corresponding Computer Object on request
*  @file           : FactoryPattern.js
*  @module         :  - say,pc,server
*  @author         : Dilip
*  @version        : 1.0
*  @since          : 02-11-2019

*/
const factory = require('./factoryPatternBl')
try {
  let factoryObject = new factory.CarFactory()
  let suvObject = factoryObject.specification("Audi", "black", 4000000, "Suv");
  let sedanObject = factoryObject.specification("Innova", "white", 1000000, "Sedan");
  console.log("The specification of Suv is= ")
  console.log(suvObject);
  console.log("The specification of Sedan is= ");
  console.log(sedanObject);
}
catch (error) {
  console.log(error.message)
}