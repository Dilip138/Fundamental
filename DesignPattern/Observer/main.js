/**
* @Execution       :   1. default node      cmd> node Observer.js
*  @Purpose         : Observer design pattern is useful when you are interested in the state of an object
*                     and want to get notified whenever there is any change.
*  @file           : Observer.js
*  @module         :  -Eventmitter,reader,addSubject,addreader
*  @author         : Dilip
*  @version        : 1.0
*  @since          : 02-10-2019

*/
const subject = require("./observerBl")
const reader = require("./classReader")

let physics = new subject("Physics");
let dataStructure = new subject("DataStructure");

let akash = new reader("akash");
let amit = new reader("Amit");

let sumit = new reader("Sumit")
let vivek = new reader("Vivek");

akash.addSubject(physics);
amit.addSubject(physics);

sumit.addSubject(dataStructure);
vivek.addSubject(dataStructure);

physics.addReader(akash);
physics.addReader(amit);

dataStructure.addReader(sumit);
dataStructure.addReader(vivek);

physics.addTopic("Motion");
dataStructure.addTopic("LinkedList");