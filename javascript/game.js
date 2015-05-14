(function() {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var Game = TTT.Game = function(player) {
    this.board = new TTT.Board();
    this.currentPlayer = player === "computer" ? "Y" : "X";
  };


  Game.prototype.playMove = function(row, col) {
    this.board.markPosition(row, col, this.currentPlayer);
    this.changePlayer();
  };

  Game.prototype.changePlayer = function() {
    this.currentPlayer = this.currentPlayer === "X" ? "Y" : "X";
  };

})();
