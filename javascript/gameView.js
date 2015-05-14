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
      var $clicked = $(event.currentTarget);
      that.markTile($clicked);
    });
  };

  View.prototype.markTile = function($clicked) {
    var row = $clicked.data("rowId");
    var col = $clicked.data("colId");
    var mark = this.game.currentPlayer;
    this.game.playMove(row, col);
    if (mark === "X") {
      $clicked.addClass("markX");
      $clicked.html("X");
    } else {
      $clicked.addClass("markY");
      $clicked.html("Y");
    }
  };


})();
