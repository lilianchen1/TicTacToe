(function() {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var Computer = TTT.Computer = function(options) {
    this.board = options.board;
  };

  Computer.prototype.getMove = function() {
    return [0, 0];
  };
})();
