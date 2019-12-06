let Computer = function () {
  let computerInstance; // create a instance of computer function

  function initialize() {
    let isOpen = false;//create a function initialize for initialization purpose  
    function open() {
      isOpen = true;//create a function open for running pupose
    }
    function shutDown() {
      isOpen = false;//create a function shutDown for not running purpose
    }
    function state() {
      return isOpen ? "Running" : "Not Running";//create a function state for running and and not running 
    }
    return {
      open: open,
      shutDown: shutDown,
      state: state
    }
  }
  return {
    getInstance: function () {
      if (!computerInstance) computerInstance = initialize();
      return computerInstance;//here getInstance is used for initialize at once for check the singleton
    }
  }
}
module.exports = Computer
