(function() {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var Node = TTT.TicTacToeNode = function(options) {
    this.game = options.game;
    this.board = options.board;
    this.prevPos = options.prevPos;
    this.nextPlayerMark = options.nextPlayerMark;
  };

  Node.prototype.children = function() {
    var children = [];

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        var pos = [i, j];
        if (this.board.isEmpty(i, j)) {
          var newBoard = this.board.dup();
          newBoard.grid[i][j] = this.nextPlayerMark;
          var nextPlayerMark = this.nextPlayerMark === "X" ? "Y" : "X";
          children.push(new TTT.TicTacToeNode({
            game: this.game,
            board: newBoard,
            nextPlayerMark: nextPlayerMark,
            prevPos: pos
          }));
        }
      }
    }

    return children;
  };

  Node.prototype.willWin = function() {
    if (this.board.over()) {
      return this.board.winner === this.game.currentPlayer;
    }
    if (this.nextPlayerMark === this.game.currentPlayer) {
      for (var i = 0; i < this.children().length; i++) {
        var node = this.children()[i];
        if (node.willWin()) {
          return true;
        }
      }
    }
    else {
      for (var j = 0; j < this.children().length; j++) {
        var node2 = this.children()[j];
        if (!node2.willWin()) {
          return false;
        }
      }
      return true;
    }
  };

  Node.prototype.willLose = function() {
    if (this.board.over()) {
      return this.board.won() && this.board.winner !== this.game.currentPlayer;
    }

    if (this.nextPlayerMark !== this.game.currentPlayer) {
      for (var i = 0; i < this.children().length; i++) {
        var node = this.children()[i];
        if (node.willLose()) {
          return true;
        }
      }
    }
    else {
      for (var j = 0; j < this.children().length; j++) {
        var node2 = this.children()[j];
        if (!node2.willLose()) {
          return false;
        }
      }
      return true;
    }
  };


})();
