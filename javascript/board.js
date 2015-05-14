(function() {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var Board = TTT.Board = function() {
    this.grid = this.makeGrid();
  };

  Board.prototype.markPosition = function (row, col, player) {
    if (player === "Y") {
      // make a valid/non-losing move
    }

    else {

    }
  };

  Board.prototype.makeGrid = function() {
    return [[0, 0 , 0], [0, 0 ,0], [0, 0, 0]];
  };
})();
