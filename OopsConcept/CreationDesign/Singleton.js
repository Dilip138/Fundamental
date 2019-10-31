/**
* Execution       :   1. default node      cmd> node .js 
*                     
* 
*  @Purpose         :Refer sigleton link and practice the various SIngleton Approaches that are
*                    possible. This includes
* 
*  @file           : Singleton.js
*  @module         :  - init,getInstance
*  @author         : Dilip
*  @version        : 1.0
*  @since          : 15-10-2019

*/

let mySingleton = (function() {
  // Instance stores a reference to the Singleton
  let instance;
  function init() {
    // Singleton
    return {
         public: "I am also public"
    };
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})();
let m1= mySingleton.getInstance();
let m2 = mySingleton.getInstance();
if(m1 === m2){
    console.log("I am Singleton");    
}
else{
    console.log("I am not Singleton");    
}
