(function() {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var Board = TTT.Board = function(game) {
    this.grid = this.makeGrid();
    this.game = game;
  };

  Board.prototype.markHumanPosition = function (row, col) {
    this.grid[row][col] = "X";
    this.game.changePlayer();
    
    if (!this.over()) {
      this.game.playComputerMove();
    }

  };

  Board.prototype.markComputerPosition = function() {
    // get winning/non-losing move
    // add html/css to the correct tile
    var computer = new TTT.Computer({board: this, game: this.game});
    var row = computer.getMove()[0];
    var col = computer.getMove()[1];
    var $tile = $("[data-row-id='" + row + "'][data-col-id='" + col + "']");
    $tile.addClass("markY");
    $tile.html("Y");
    this.grid[row][col] = "Y";
  };

  Board.prototype.isEmpty = function(row, col) {
    return this.grid[row][col] === 0;
  };

  Board.prototype.makeGrid = function() {
    return [[0, 0 , 0], [0, 0 ,0], [0, 0, 0]];
  };

  Board.prototype.over = function() {
    var flattened = [];
    flattened = flattened.concat.apply(flattened, this.grid);
    for (var i = 0; i < flattened.length; i++) {
      if (flattened[i] === 0) {
        return false;
      }
    }

    return true;
  };
})();
