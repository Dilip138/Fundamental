/**
* Execution       :   1. default node      cmd> node observer.js                  
*  @Purpose         : Observer design pattern is useful when you are interested in the state of an object
*                     and want to get notified whenever there is any change.
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
    /**
     * 
     * @param: one-to-many dependency between objects so that when one object changes state, 
     * all its dependents are notified and updated automatically
     */
    subscribe: function (fn) {
        this.handlers.push(fn);
    },
    /**
     * 
     * @param: unsubscribe from a stream of events coming from that publisher
     */
    unsubscribe: function (fn) {
        this.handlers = this.handlers.filter(function (item) {
            if (item !== fn) {
                return item;
            }
        });
    },
    /**
     * 
     * @param:Event handlers are functions that will be notified when a certain event fires.
     */
    fire: function (o, thisObj) {
        let scope = thisObj;
        this.handlers.forEach(function (item) {
            item.call(scope, o);
        });
    }
};
/**
 * @param: initialize the log function for adding and showing the items
 */
let log = (function () {
    let log = "";

    return {
        add: function (msg) {
            log += msg + "\n";
        },
        show: function () {
            console.log(log);
            log = "";
        }
    };
})();
/**
 * @param:run method use for display the items of subscriber and unsubscriber
 */

function run() {
    let clickHandler = function (item) {
        log.add("fired: " + item);
    };
    /**
     * @param:create a methed of Click function
     */
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

