(function() {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var Computer = TTT.Computer = function(options) {
    this.board = options.board;
    this.game = options.game;
  };

  Computer.prototype.getWinningMove = function() {
    var node = new TTT.TicTacToeNode({
      game: this.game,
      board: this.board,
      nextPlayerMark: this.game.currentPlayer
    });

    var children = node.children();

    for (var i = 0; i < children.length; i++) {
      var currentNode = children[i];
      if (currentNode.willWin()) {
        var pos = currentNode.prevPos; //pos is in [i, j] form
        // return pos
      }
    }

    for (var j = 0; j < children.length; j++) {
      var currentNode2 = children[j];
      if (!currentNode2.willLose()) {
        var pos2 = currentNode2.prevPos;
        // return pos2
      }
    }

    // $("body").append("<div class='went-wrong'>WAT? Something went wrong</div>")


    // remove this chunck (which really belongs to dumb AI) after implementing search tree

    var row = Math.floor(Math.random() * 3);
    var col = Math.floor(Math.random() * 3);
    while (!this.board.isEmpty(row, col)) {
      row = Math.floor(Math.random() * 3);
      col = Math.floor(Math.random() * 3);
    }

    return [row, col];
  };

})();
