(function() {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var Board = TTT.Board = function(options) {
    this.grid = options.grid || this.makeGrid();
    this.game = options.game;

  };

  Board.prototype.markHumanPosition = function (row, col) {
    this.grid[row][col] = "X";
    this.game.changePlayer();

    if (!this.over()) {
      this.game.playComputerMove();
    }

  };

  Board.prototype.markComputerPosition = function() {
    var computer = new TTT.Computer({board: this, game: this.game});
    var row = computer.getWinningMove()[0];
    var col = computer.getWinningMove()[1];

    var $tile = $("[data-row-id='" + row + "'][data-col-id='" + col + "']");
    $tile.addClass("markY");
    $tile.html("<img src='./images/computer.png' />");
    this.grid[row][col] = "Y";
  };

  Board.prototype.isEmpty = function(row, col) {
    return this.grid[row][col] === 0;
  };

  Board.prototype.makeGrid = function() {
    return [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  };

  Board.prototype.won = function() {
    for (var row = 0; row < this.grid.length; row++) {
      if (this.allEqual(this.grid[row])) {
        this.winner = this.grid[row][0];
        return true;
      }
      if (this.allEqual([this.grid[0][row], this.grid[1][row], this.grid[2][row]])) {
        this.winner = this.grid[0][row];
        return true;
      }
    }
    if (this.allEqual([this.grid[0][0], this.grid[1][1], this.grid[2][2]])) {
      this.winner = this.grid[0][0];
      return true;
    }
    else if (this.allEqual([this.grid[2][0], this.grid[1][1], this.grid[0][2]])) {
      this.winner = this.grid[2][0];
      return true;
    }
    else {
      return false;
    }
  };

  Board.prototype.allEqual = function(arr) {
    if ((arr[0] === arr[1] && arr[1] === arr[2]) && arr[0] !== 0) {
      return true;
    }
    return false;
  };

  Board.prototype.over = function() {
    if (this.won()) {
      return true;
    }
    var flattened = [];
    flattened = flattened.concat.apply(flattened, this.grid);
    for (var i = 0; i < flattened.length; i++) {
      if (flattened[i] === 0) {
        return false;
      }
    }

    return true;
  };

  Board.prototype.dup = function() {
    var duppedGrid = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    for (var i = 0; i < this.grid.length; i++) {
      for (var j = 0; j < this.grid.length; j++) {
        duppedGrid[i][j] = this.grid[i][j];
      }
    }
    return new TTT.Board({game: this.game, grid: duppedGrid});
  };

})();
