let Computer = function () {
  let computerInstance;

  function initialize() {
    let isOpen = false;

    function open() {
      isOpen = true;
    }
    function shutDown() {
      isOpen = false;
    }
    function state() {
      return isOpen ? "Runnibg" : "Not Running";
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
      return computerInstance;
    }
  }
}

module.exports = Computer
