/**
* Execution       :   1. default node      cmd> node .js 
*                     
* 
*  @Purpose         :Use ​ Factory Pattern to create a Computer Factory that can Produce PC, Laptop and
*                    Server Class Computers. As Shown in the Figure Below Create an Abstract Computer
*                    Class and PC, Laptop and Server inherit from Computer and ComputerFactory is able
*                    to create the corresponding Computer Object on request
* 
*  @file           : FactoryPattern.js
*  @module         :  - say,pc,server
*  @author         : Dilip
*  @version        : 1.0
*  @since          : 15-10-2019

*/


class Computer {
  constructor() {}

  say() {
    throw new Error("Method 'say()' must be implemented.");
  }
}
class PC extends Computer {
  say() {
    console.log("==============");
    console.log("The pc information is");
    console.log("RAM = 2GB", "HDD = 500GB", "CPU = 2.4GHz");
  }
}

class Server extends Computer {
  say() {
    console.log("==============");
    console.log("The server information is");
    console.log("RAM = 16GB", "HDD = 1TB", "CPU = 2.8GHz");
  }
}

new PC().say();
new Server().say();

