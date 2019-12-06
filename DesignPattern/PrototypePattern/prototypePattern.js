/**
*  @Execution      :   1. default node      cmd> node prototypePattern.js 
*  @Purpose        : Prototype design pattern is used when the Object creation is a costly affair and
*                    requires a lot of time and resources and you have a similar object already existing.
*                    Use Prototype Pattern as shown in the Link above to create multiple Employee Object
*  @file           : protypePattern.js
*  @module         :  - Customer,CustomerProtype,say,run
*  @author         : Dilip
*  @version        : 1.0
*  @since          : 02-11-2019
*/
const information = require('./prototypeBl')
let proto = new information.Student("Dilip", "Soni", "Computer Science && Engineering")
let prototype = new information.StudentPrototype(proto)
let customer = prototype.clone();
customer.say();
