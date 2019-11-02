/**
* Execution       :   1. default node      cmd> node .js 
*                     
* 
*  @Purpose         : Prototype design pattern is used when the Object creation is a costly affair and
*                    requires a lot of time and resources and you have a similar object already existing.
*                    Use Prototype Pattern as shown in the Link above to create multiple Employee Object
* 
*  @file           : ProtypePattern.js
*  @module         :  - Customer,CustomerProtype,say,run
*  @author         : Dilip
*  @version        : 1.0
*  @since          : 15-10-2019

*/
function Student(first, last, status) {
  this.first = first;
  this.last = last;
  this.status = status;
  this.say = () => {
    console.log(
      "name: " + this.first + " " + this.last + ", status: " + this.status
    );
  };
}
function StudentPrototype(proto) {
  this.proto = proto;
  this.clone = function() {
    let customer = new Student();
    customer.first = proto.first;
    customer.last = proto.last;
    customer.status = proto.status;
    return customer;
  };
}

function run() {
  let proto = new Student("Dilip", "Soni", "Computer Science && Engineering");
  let prototype = new StudentPrototype(proto);
  let customer = prototype.clone();
  customer.say();
}
run();
