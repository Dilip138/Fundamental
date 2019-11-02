/**
* Execution       :   1. default node      cmd> node .js 
*                     
* 
*  @Purpose         : Observer design pattern is useful when you are interested in the state of an object
*                     and want to get notified whenever there is any change. 
* 
*  @file           : Observer.js
*  @module         :  -Subscribe,Unsubsribe,Fire,add,show,run
*  @author         : Dilip
*  @version        : 1.0
*  @since          : 15-10-2019

*/

function Click() {
  this.handlers = []; // observers
}

Click.prototype = {
  subscribe: function(fn) {
    this.handlers.push(fn);
  },

  unsubscribe: function(fn) {
    this.handlers = this.handlers.filter(function(item) {
      if (item !== fn) {
        return item;
      }
    });
  },

  fire: function(o, thisObj) {
    let scope = thisObj;
    this.handlers.forEach(function(item) {
      item.call(scope, o);
    });
  }
};

let log = (function() {
  let log = "";

  return {
    add: function(msg) {
      log += msg + "\n";
    },
    show: function() {
      console.log(log);
      log = "";
    }
  };
})();

function run() {
  let clickHandler = function(item) {
    log.add("fired: " + item);
  };

  let click = new Click();

  click.subscribe(clickHandler);
  click.fire("event #1");
  click.unsubscribe(clickHandler);
  click.fire("event #2");
  click.subscribe(clickHandler);
  click.fire("event #3");
  log.show();
}
run();
