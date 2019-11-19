/**
* Execution       :   1. default node      cmd> node PrototypePattern.js 
*  @Purpose         : Prototype design pattern is used when the Object creation is a costly affair and
*                    requires a lot of time and resources and you have a similar object already existing.
*                    Use Prototype Pattern as shown in the Link above to create multiple Employee Object
*  @file           : ProtypePattern.js
*  @module         :  - Customer,CustomerProtype,say,run
*  @author         : Dilip
*  @version        : 1.0
*  @since          : 02-11-2019

*/
const information = require('./prototypeBl')
let proto = new information.Student("Dilip", "Soni", "Computer Science && Engineering")
// proto = new information.Student("Rahul", "Singh", "Mechanical Engineering")
let prototype = new information.StudentPrototype(proto)
let customer = prototype.clone();
customer.say();

