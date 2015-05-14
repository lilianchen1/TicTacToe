(function() {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var Computer = TTT.Computer = function(options) {
    this.board = options.board;
    this.game = options.game;
  };

  Computer.prototype.getMove = function() {
    var row = Math.floor(Math.random() * 3);
    var col = Math.floor(Math.random() * 3);
    while (!this.board.isEmpty(row, col)) {
      row = Math.floor(Math.random() * 3);
      col = Math.floor(Math.random() * 3);
    }

    return [row, col];

  };

})();
