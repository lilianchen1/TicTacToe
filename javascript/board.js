(function() {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var Board = TTT.Board = function() {
    this.grid = this.makeGrid();
  };

  Board.prototype.markHumanPosition = function (row, col) {
    if (!this.isEmpty(row, col)) {
      alert("this square is already taken; please choose another one");
    }
    this.grid[row][col] = "X";
  };

  Board.prototype.markComputerPosition = function() {
    // get winning/non-losing move
    // add html/css to the correct tile
    var computer = new TTT.Computer({board: this});
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
    return false;
  };
})();
