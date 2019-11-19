const eventEmitter = require('events').EventEmitter;
const myEmitter = new eventEmitter();
const reader = require("./classReader")

myEmitter.on('New Topic Added', function (topicName,subjectName,subjectObject) { 
    console.log(topicName+" was added in "+subjectName);
    subjectObject.alert();
});
class Subject {
    constructor(name) {
        this.name = name;
        this.topic = null;
        this.readers = null;
    }
    /**
     * @description : Add a new topic to subject
     * @param {topicName} topicName is the name of topic being added to subject
     */
    addTopic(topicName) {
        if (this.topic == null) this.topic = new Array();
        this.topic.push(topicName);
        myEmitter.emit('New Topic Added',topicName,this.name,this);//Event Emitted
    }
    /**
     * @description : Add a new reader to subject
     * @param {readerName} readerName is the new reader being added
     */
    addReader(readerName) {
        if (this.readers == null) this.readers = new Array();
        this.readers.push(readerName);
    }
    /**
     * @description : Send an alert to all the readers of subject
     */
    alert() {
          //console.log("Topic " + name + " was added in subject " + this.name)
        if (this.readers != null) {
            this.readers.forEach(element => {
                console.log("Send an alert to " + element.name);
                element.informed();
            });
        }
    }
}

module.exports = Subject;