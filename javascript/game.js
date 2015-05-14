(function() {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var Game = TTT.Game = function(player) {
    this.board = new TTT.Board(this);
    this.currentPlayer = player === "computer" ? "Y" : "X";
  };


  Game.prototype.playHumanMove = function(row, col) {
    this.board.markHumanPosition(row, col);
  };

  Game.prototype.playComputerMove = function() {
    this.board.markComputerPosition();
    this.changePlayer();
  };

  Game.prototype.changePlayer = function() {
    this.currentPlayer = this.currentPlayer === "X" ? "Y" : "X";
  };

})();
