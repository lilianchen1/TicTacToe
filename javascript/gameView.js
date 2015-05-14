(function() {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var View = TTT.View = function(game, $el) {
    this.game = game;
    this.$el = $el;
  };

  View.prototype.setUpBoard = function() {
    for (var row = 0; row < 3; row++) {
      var $row = $("<div class='row'></div>");
      for (var col = 0; col < 3; col++) {
        var $tile = $("<div class='tile'></div>");
        $tile.attr("data-row-id", row);
        $tile.attr("data-col-id", col);
        $row.append($tile);
      }
      this.$el.append($row);
    }
  };

  View.prototype.startGame = function() {
    var that = this;

    $(".tile").on("click", function(event) {
      if (that.game.currentPlayer === "X") {
        var $clicked = $(event.currentTarget);
        that.markTile($clicked);
      }
      if (that.game.board.over()) {
        $("body").append("<div class='modal'></div>");
        $("body").append("<div class='over'>Game Over<br><button class='over'>Try Again</button></div>");
        $("button.over").on("click", function() {
          location.reload();
        });
      }
    });

    if (this.game.currentPlayer === "Y") {
      this.game.playComputerMove();
    }
  };

  View.prototype.markTile = function($clicked) {
    var row = $clicked.data("rowId");
    var col = $clicked.data("colId");
    if (this.game.board.isEmpty(row, col)) {
      this.game.playHumanMove(row, col);
      $clicked.addClass("markX");
      $clicked.html("X");
    }
  };

})();
